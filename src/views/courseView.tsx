// Display for a single course
import * as React from "react";
import {Course, ICourse} from "../scripts/Course"

/**
 * Display a course and its information
 */
class CourseView extends React.Component<any, any>
{
	constructor(props: Course)
	{
    super(props);
		this.state = {course: this.props.course};
  }

  render()
	{
		return(
			<div>
				<p>Name: {this.state.course.name}</p>
				<p>ID: {this.state.course.ID}</p>
				<p>Credits: {this.state.course.credits}</p>
				<p>Difficulty: {this.state.course.difficultyRating}</p>
			</div>
		);

  }
}

export default CourseView;
