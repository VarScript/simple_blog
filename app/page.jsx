"use client";
import Link from "next/link";
import Courses from "./componets/Courses";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";
import CourseSearch from "./componets/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoures = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCoures();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Courses of your interest</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
