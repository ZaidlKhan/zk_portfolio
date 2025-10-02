import { Fragment, useState } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-4 w-full">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 h-16 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">
                  {skeleton({
                    widthCls: 'w-48',
                    heightCls: 'h-6',
                    className: 'mb-2',
                  })}
                </h3>
                <p className="text-base-content text-opacity-60 text-sm">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-4',
                  })}
                </p>
              </div>
              <div className="flex-shrink-0">
                {skeleton({
                  widthCls: 'w-6',
                  heightCls: 'h-6',
                })}
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div className="card shadow-lg compact bg-base-100" key={index}>
        <div className="p-4 w-full">
          <div className="flex items-center gap-4">
            {item.imageUrl && (
              <div className="avatar flex-shrink-0">
                <div className="w-16 h-16 mask mask-squircle">
                  <LazyImage
                    src={item.imageUrl}
                    alt={item.title}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-base-content truncate">
                {item.title}
              </h3>
              <p className="text-base-content text-opacity-60 text-sm truncate">
                {item.description}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <button
                className="btn btn-sm btn-outline"
                onClick={() => {
                  try {
                    if (googleAnalyticId) {
                      ga.event('Click External Project', {
                        post: item.title,
                      });
                    }
                  } catch (error) {
                    console.error(error);
                  }
                  window?.open(item.link, '_blank');
                }}
              >
                View Project
              </button>
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${expandedProject === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown content - Blog post style */}
          {expandedProject === index && (
            <div className="mt-4 pt-4 border-t border-base-300">
              <div className="space-y-6">
                {/* Project Overview */}
                <div>
                  <h4 className="font-semibold text-lg text-base-content mb-3">Project Overview</h4>
                  <p className="text-base-content text-opacity-80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Check if screenshots is a single string - special layout */}
                {typeof item.screenshots === 'string' ? (
                  <div>
                    <h4 className="font-semibold text-lg text-base-content mb-3">Project Overview</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left side - Image */}
                      <div>
                        <img
                          src={item.screenshots}
                          alt={`${item.title} screenshot`}
                          className="aspect-video w-full object-cover rounded-lg border border-base-300"
                        />
                      </div>

                      {/* Right side - Technical Details and Features */}
                      <div className="space-y-6">
                        {/* Technical Details */}
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies && item.technologies.length > 0 ? (
                              item.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="badge badge-primary badge-sm">
                                  {tech}
                                </span>
                              ))
                            ) : (
                              <span className="text-sm text-base-content/60">Technologies not specified</span>
                            )}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Key Features</h5>
                          {item.keyFeatures && item.keyFeatures.length > 0 ? (
                            <ul className="text-sm text-base-content/80 space-y-1">
                              {item.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-sm text-base-content/60">Features not specified</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : Array.isArray(item.screenshots) && item.screenshots.length === 2 ? (
                  /* Special layout for 2 vertical mobile images (Greek alphabet recognition) */
                  <div>
                    <h4 className="font-semibold text-lg text-base-content mb-3">Project Overview</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left side - 2 Mobile Images */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.screenshots.map((screenshot, index) => (
                          <div key={index}>
                            <img
                              src={screenshot}
                              alt={`${item.title} screenshot ${index + 1}`}
                              className="aspect-[242/335] w-full object-cover rounded-lg border border-base-300"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Right side - Technical Details, Features, and Learnings */}
                      <div className="space-y-6">
                        {/* Technical Details */}
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies && item.technologies.length > 0 ? (
                              item.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="badge badge-primary badge-sm">
                                  {tech}
                                </span>
                              ))
                            ) : (
                              <span className="text-sm text-base-content/60">Technologies not specified</span>
                            )}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Key Features</h5>
                          {item.keyFeatures && item.keyFeatures.length > 0 ? (
                            <ul className="text-sm text-base-content/80 space-y-1">
                              {item.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-sm text-base-content/60">Features not specified</span>
                          )}
                        </div>

                        {/* What I Learned */}
                        <div>
                          <h5 className="font-medium text-base-content mb-2">What I Learned</h5>
                          <div className="bg-base-200/50 rounded-lg p-3">
                            {item.learnings && item.learnings.length > 0 ? (
                              <ul className="text-sm text-base-content/80 space-y-2">
                                {item.learnings.map((learning, learningIndex) => (
                                  <li key={learningIndex} className="flex items-start gap-3">
                                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                    <span className="leading-relaxed">{learning}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-base-content/60 italic">Learning insights not specified</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Other screenshot formats */
                  <>
                    {/* Project Screenshots Section */}
                    {item.screenshots && (
                      <div>
                        <h4 className="font-semibold text-lg text-base-content mb-3">Project Screenshots</h4>
                        {/* Check if screenshots is an array */}
                        {Array.isArray(item.screenshots) ? (
                          <div className={`grid gap-2 ${item.screenshots.length === 1 ? 'grid-cols-1' :
                            item.screenshots.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                              item.screenshots.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                                item.screenshots.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
                                  'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                            }`}>
                            {item.screenshots.map((screenshot, index) => (
                              <div key={index}>
                                <img
                                  src={screenshot}
                                  alt={`${item.title} screenshot ${index + 1}`}
                                  className="aspect-[9/19.5] w-full object-cover rounded-lg border border-base-300"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Default object format layout */
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.screenshots.main && (
                              <div>
                                <img
                                  src={item.screenshots.main}
                                  alt={`${item.title} main screenshot`}
                                  className="h-80 w-full object-cover rounded-lg border border-base-300"
                                />
                              </div>
                            )}
                            {item.screenshots.mobile && (
                              <div>
                                <img
                                  src={item.screenshots.mobile}
                                  alt={`${item.title} mobile screenshot`}
                                  className="h-80 w-full object-cover rounded-lg border border-base-300"
                                />
                              </div>
                            )}
                            {!item.screenshots?.main && !item.screenshots?.mobile && (
                              <div className="col-span-2">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-base-300">
                                  <div className="text-center">
                                    <svg className="w-12 h-12 mx-auto mb-2 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm text-base-content/60">Screenshots coming soon</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Technical Details */}
                    <div>
                      <h4 className="font-semibold text-lg text-base-content mb-3">Technical Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies && item.technologies.length > 0 ? (
                              item.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="badge badge-primary badge-sm">
                                  {tech}
                                </span>
                              ))
                            ) : (
                              <span className="text-sm text-base-content/60">Technologies not specified</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-base-content mb-2">Key Features</h5>
                          {item.keyFeatures && item.keyFeatures.length > 0 ? (
                            <ul className="text-sm text-base-content/80 space-y-1">
                              {item.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-sm text-base-content/60">Features not specified</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* What I Learned - Only show for non-2-image layouts */}
                {!(Array.isArray(item.screenshots) && item.screenshots.length === 2) && (
                  <div>
                    <h4 className="font-semibold text-lg text-base-content mb-3">What I Learned</h4>
                    <div className="bg-base-200/50 rounded-lg p-4">
                      {item.learnings && item.learnings.length > 0 ? (
                        <ul className="text-sm text-base-content/80 space-y-2">
                          {item.learnings.map((learning, learningIndex) => (
                            <li key={learningIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                              <span className="leading-relaxed">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-base-content/60 italic">Learning insights not specified</p>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card compact bg-base-100 shadow bg-opacity-40">
          <div className="card-body">
            <div className="mx-3 flex items-center justify-between mb-4">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    {header}
                  </span>
                )}
              </h5>
            </div>
            <div className="space-y-3">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
