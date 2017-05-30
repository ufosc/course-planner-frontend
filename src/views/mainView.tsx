// Display the main page
import * as React from "react";
import OverallScheduleView from "./overallScheduleView";
import {OverallSchedule} from "../scripts/OverallSchedule"
import CourseSearchView from "./courseSearchView"

// Some data for testing
var dummyData = JSON.stringify(
  {
      "semesters":
      [
        {
          "year": 2017,
          "season": "Fall",
          "courses":
          [
            {
              "name": "General Chemistry 1",
              "ID": "CHM 2045",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "General Chemistry 1 Laboratory",
              "ID": "CHM 2045L",
              "description": "",
              "credits": 1,
              "professors": [""],
              "difficultyRating": 2,
              "prerequisites": []
            },
            {
              "name": "Programming Fundamentals 1",
              "ID": "COP 3502",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "Expository and Argumentative Writing",
              "ID": "ENC 1101",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 2,
              "prerequisites": []
            },
            {
              "name": "What is the Good Life",
              "ID": "IUF 1000",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 2,
              "prerequisites": []
            },
            {
              "name": "Analytic Geometry and Calculus 1",
              "ID": "MAC 2311",
              "description": "",
              "credits": 4,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            }
          ]
        },
        {
          "year": 2018,
          "season": "Spring",
          "courses":
          [
            {
              "name": "Programming Fundamentals 2",
              "ID": "COP 3503",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "Applications of Discrete Structures",
              "ID": "COT 3100",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            },
            {
              "name": "Analytic Geometry and Calculus 2",
              "ID": "MAC 2312",
              "description": "",
              "credits": 4,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "Physics with Calculus 1",
              "ID": "PHY 2048",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            },
            {
              "name": "Physics with Calculus 1 Laboratory",
              "ID": "PHY 2048L",
              "description": "",
              "credits": 1,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            }
          ]
        },
        {
          "year": 2018,
          "season": "Fall",
          "courses":
          [
            {
              "name": "Data Structures and Algorithm",
              "ID": "COP 3530",
              "description": "",
              "credits": 4,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            },
            {
              "name": "Analytic Geometry and Calculus 3",
              "ID": "MAC 2313",
              "description": "",
              "credits": 4,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            },
            {
              "name": "Physics with Calculus 2",
              "ID": "PHY 2049",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            },
            {
              "name": "Laboratory for Physics with Calculus 2",
              "ID": "PHY 2049L",
              "description": "",
              "credits": 1,
              "professors": [""],
              "difficultyRating": 2,
              "prerequisites": []
            }
          ]
        },
        {
          "year": 2019,
          "season": "Spring",
          "courses":
          [
            {
              "name": "Introduction to Software Engineering",
              "ID": "CEN 3031",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "Professional Communication for Engineers",
              "ID": "ENC 3246",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 1,
              "prerequisites": []
            },
            {
              "name": "Computational Linear Algebra",
              "ID": "MAS 3114",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 3,
              "prerequisites": []
            },
            {
              "name": "Introduction to Computer Organization",
              "ID": "CDA 3101",
              "description": "",
              "credits": 3,
              "professors": [""],
              "difficultyRating": 4,
              "prerequisites": []
            }
          ]
        }
      ],
      "majors":
      [{
        "name": "Computer Science",
        "requiredCourses": [],
        "requiredCredits": 0
      }],
      "minors":
      [{
        "name": "",
        "requiredCourses": [],
        "requiredCredits": 0
      }],
  }
);

/**
 * This is the main layout of the page
 */
class MainView extends React.Component<any, any>
{

  render()
	{
		return(
      <div>
			  <OverallScheduleView class="right" schedule={OverallSchedule.fromJson(JSON.parse(dummyData))}/>
        <CourseSearchView/>
      </div>
		);

  }
}

export default MainView;
