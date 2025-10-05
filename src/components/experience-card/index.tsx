import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  shortDescription,
  fullDescription,
  logo,
  technologies,
  learnings,
  improvements,
  isCurrent,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  shortDescription?: React.ReactNode;
  fullDescription?: string;
  companyLink?: string;
  logo?: string;
  technologies?: string[];
  learnings?: string[];
  improvements?: string[];
  isCurrent?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="card shadow-lg compact bg-base-100 mb-3">
      <div 
        className="p-4 w-full cursor-pointer hover:bg-base-200/30 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
      >
        <div className="flex gap-4">
          {logo && (
            <div className="avatar flex-shrink-0">
              <div className="w-16 h-16 mask mask-squircle">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt="Company logo"
                  className="w-full h-full object-contain bg-white p-2"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <h3 className="font-semibold text-lg text-base-content">
                {position}
              </h3>
              <div className="text-xs text-base-content opacity-70 whitespace-nowrap">
                {time}
              </div>
            </div>
            <p className={`text-base-content text-opacity-60 text-sm ${open ? '' : 'truncate'}`}>
              {open && fullDescription ? fullDescription : shortDescription}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="btn btn-sm btn-ghost pointer-events-none">
              <svg
                className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
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
            </div>
          </div>
        </div>
        {open && (
          <div className="mt-4 pt-4 border-t border-base-300">
            <div className="space-y-4">
              {/* Two column layout for Technologies and Skills Learned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technologies && technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base-content mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span key={index} className="badge badge-primary badge-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {learnings && learnings.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base-content mb-2">
                      {isCurrent ? 'What I\'m Learning' : 'What I Learned'}
                    </h4>
                    <ul className="list-disc list-outside ml-5 space-y-1 text-base-content text-opacity-80 text-sm">
                      {learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Full width section for improvements */}
              {improvements && improvements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-base-content mb-2">Next Time I'd...</h4>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-base-content text-opacity-80 text-sm">
                    {improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100 mb-3" key={index}>
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
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card compact bg-base-100 shadow bg-opacity-40">
        <div className="card-body">
          <div className="mx-3 flex items-center justify-between mb-2">
            <h5 className="card-title">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="text-base-content opacity-70">Experience</span>
              )}
            </h5>
          </div>
          <div className="space-y-3">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    shortDescription={experience.company}
                    fullDescription={experience.description}
                    companyLink={experience.companyLink || undefined}
                    logo={experience.companyLogo}
                    technologies={experience.technologies}
                    learnings={experience.learnings}
                    improvements={experience.improvements}
                    isCurrent={experience.to.toLowerCase() === 'present'}
                  />
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

