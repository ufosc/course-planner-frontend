// Display for a semester and it's courses
import * as React from "react";
import {Semester, ISemester} from "../scripts/Semester"
import CourseView from "./courseView"
import {Course} from "../scripts/Course"

/**
 * This displays a semester and all it's courses
 */
class SemesterView extends React.Component<any, any>
{
	constructor(props: Semester)
	{
    super(props);
		this.state = {semester: this.props.semester};
  }

  render()
	{
		let courserList: Course[] = this.state.semester.courses.map(function(course)
		{
			return <CourseView course={course}/>;
		});

		return(
			<div>
				<p>Year: {this.state.semester.year}</p>
				<p>Season: {this.state.semester.season}</p>
				<p>Credits: {this.state.semester.credits}</p>
				<p>Courses: </p>
				<ul>
					{courserList}
				</ul>
			</div>
		);

  }
}

export default SemesterView;
