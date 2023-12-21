import React from "react";
import "./Card.css";

export const Card = ({ courses }) => {
  if (!courses || courses?.length === 0) {
    return <div>No data available</div>;
  }

  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    return (
      <div>
        {hours > 0 && <span>{hours}h </span>}
        {minutes > 0 && <span>{minutes}m</span>}
      </div>
    );
  };

  const courseProgressPercentage = (modules, finishedModules) => {
    return (finishedModules * 100) / modules;
  };

  return (
    <div>
      {courses?.map((course) => (
        <div key={`${course.title}-${course.id}`} class="card">
          <div class="image__container">
            <img src={course.image} alt="" />

            <div class="level">{course.level}</div>
          </div>

          <h3 class="card__title">{course.title}</h3>

          <div class="card__info">
            <div class="user">
              <img src={course.user.avatar} alt={course.user.name} />

              <p>{course.user.name}</p>
            </div>

            <div class="rating">
              <p>{course.rating}</p>
            </div>
          </div>

          {course.isMyCource && (
            <div>
              <progress
                value={courseProgressPercentage(
                  course.modules,
                  course.finishedModules
                )}
                max="100"
              >
                {courseProgressPercentage(
                  course.modules,
                  course.finishedModules
                )}
                %
              </progress>

              <div class="card__info">
                <p>
                  {course.finishedModules} / {course.modules} Modules
                </p>

                <div>
                  {`${courseProgressPercentage(
                    course.modules,
                    course.finishedModules
                  )} %`}
                </div>
              </div>
            </div>
          )}

          <div class="card__info">
            <div>{course.students} Student</div>

            <div>{course.modules} Modules</div>

            <div>{formatDuration(course.duration)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
