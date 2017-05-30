// Display for the whole schedule
import * as React from "react";
import {OverallSchedule, IOverallSchedule} from "../scripts/OverallSchedule"
import SemesterView from "./semesterView"
import {Semester, ISemester} from "../scripts/Semester"

/**
 * This contains the whole schedule including semesters and courses
 */
class OverallScheduleView extends React.Component<any, any>
{
	constructor(props: IOverallSchedule)
	{
    super(props);
		// Convert the passed data to a parsed JSON make it an OverallSchedule
		this.state = {schedule: this.props.schedule};
		console.log("Overall Schedule test");
		console.log(this.state.schedule);
  }

  render()
	{
		let semesterList: Semester[] = this.state.schedule.semesters.map(function(semester)
		{
			// console.log("Listing Semesters");
			// console.log(aSemester);
			return <SemesterView semester={semester}/>;
		});

		return(
			<div>
				<p>Major: {this.state.schedule.majors[0].name}</p>
				<p>Minor: {this.state.schedule.minors[0].name}</p>
				<p> Total Credits: {this.state.schedule.credits}</p>
				<p>Semesters:</p>
				<ul>
					{semesterList}
				</ul>
			</div>
		);

  }
}

export default OverallScheduleView;
