import { useState } from "react";

import dummydata from "../data/dummydata";
import CardModules from "../components/CardModules";

import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";

import { useParams } from "react-router-dom";
import { decode } from "he";

import { LoadingOverlay } from "@mantine/core";

export default function Course() {
  const [isId, setisId] = useState(1);
  const [isClassId, setisClassId] = useState(1);
  const apiService = useApiService();
  const { courseId } = useParams();

  const { data: courseModulesResponse, isLoading: isGettingCourseModules } =
    useQuery({
      queryKey: ["course-modules", `id=${courseId}`],
      queryFn: () =>
        apiService.get(`/ldlms/v2/sfwd-modules?course=${courseId}`),
    });

  const { data: courseDetailsResponse, isLoading: isGettingCourseDetails } =
    useQuery({
      queryKey: ["course-details", `id=${courseId}`],
      queryFn: () => apiService.get(`/ldlms/v2/sfwd-coursesdd/${courseId}`),
    });

  //debugger;

  const courseDetails = courseDetailsResponse?.data;

  const courseModules = courseModulesResponse?.data?.map((value) => {
    return {
      id: value?.id,
      childLabel: "MODULE 1.3",
      label: decode(value?.title?.rendered || ""),
      time: "1 Hour 24 Minutes",
      views: 8,
      image: "./images/mycourses/1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Scheduled",
    };
  });

  return (
    <section className="section section-welcome">
      <LoadingOverlay
        zIndex={999}
        visible={isGettingCourseModules || isGettingCourseDetails}
      />
      <div className="col-span-12 md:col-span-6 flex flex-col">
        <div className="text-welcome">
          <span>{decode(courseDetails?.title?.rendered || "")}</span>
        </div>
        <div className="vidio-player">
          <img src=".//images/topvidioline.png" className="topBgVidio" alt="" />
          <iframe
            width="100%"
            height="183.53"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <img
            src=".//images/bottomvidioline.png"
            className="bottomBgVidio"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-5">
          <a href="#" className="btn customBtnPrimary">
            <span>START COURSE</span>
            <i className="bi bi-chevron-right"></i>
          </a>
        </div>
        <div className="box-tabs">
          <ul className="tabs-list">
            <li className={`${isId === 1 ? "active" : ""}`}>
              <button onClick={() => setisId(1)}>Checklist</button>
            </li>
            <li className={`${isId === 2 ? "active" : ""}`}>
              <button onClick={() => setisId(2)}>Worksheet</button>
            </li>
            <li className={`${isId === 3 ? "active" : ""}`}>
              <button onClick={() => setisId(3)}>Resources</button>
            </li>
          </ul>
          <div className="tabs-main">
            <div className={`tabs-content ${isId === 1 ? "active" : ""}`}>
              <ul className="list-courses">
                <li>
                  <div className="checkbox-box">
                    <input type="checkbox" id="checkbox3" />
                    <i className="bi bi-check2-square"></i>
                    <label htmlFor="checkbox3">Checklist 3</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-box">
                    <input type="checkbox" id="checkbox3" />
                    <i className="bi bi-check2-square"></i>
                    <label htmlFor="checkbox3">Checklist 3</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-box">
                    <input type="checkbox" id="checkbox3" />
                    <i className="bi bi-check2-square"></i>
                    <label htmlFor="checkbox3">Checklist 3</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`tabs-content ${isId === 2 ? "active" : ""}`}>
              <p>Resources</p>
            </div>
            <div className={`tabs-content ${isId === 3 ? "active" : ""}`}>
              <p>QnA</p>
            </div>
          </div>
        </div>
        <div className="indicator-percent">
          <span>80% to completed</span>
          <label htmlFor="indicator-labels">
            <div className="indicator w-[80%]"></div>
          </label>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col ">
        <div className="box-tabs mb-8">
          {/* <ul className="tabs-list tabs-list-class">
            <li className={`${isClassId === 1 ? "active" : ""}`}>
              <button onClick={() => setisClassId(1)}>My Courses</button>
            </li>
            <li className={`${isClassId === 2 ? "active" : ""}`}>
              <button onClick={() => setisClassId(2)}>Courses</button>
            </li>
          </ul> */}
          <div className="tabs-main">
            <div className={`tabs-content ${isClassId === 1 ? "active" : ""}`}>
              <ul className="list-courses">
                {courseModules?.map((course, index) => (
                  <CardModules
                    key={index} // Set the key here
                    className={
                      index % 2 === 0 ? "eventclass" : "bg-textPrimary"
                    }
                    images={course.image}
                    childLabel={course.childLabel}
                    label={course.label}
                    time={course.time}
                    views={course.views}
                    descriptions={course.description}
                  />
                ))}
              </ul>
            </div>
            <div className={`tabs-content ${isClassId === 2 ? "active" : ""}`}>
              <p>Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
