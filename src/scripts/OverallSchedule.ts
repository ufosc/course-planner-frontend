import {Semester} from './Semester';
import {Difficulty} from './Difficulty';
import {OverallMessages} from './Messages';
import {Degree} from './Degree';

/**
 * Defines a Overall Schedule
 */
export interface IOverallSchedule
{
	// From the semesters
	semesters: Semester[];
	credits: number;

	// For the overall
	majors: Degree[];
	minors: Degree[];
	messages: string[];
}

/**
 * The overall list of all semesters and their courses, and their messages
 * TODO: More messages
 */
export class OverallSchedule
{
	// From the semesters
	public semesters: Semester[];
	public credits: number;

	// For the overall
	public majors: Degree[];
	public minors: Degree[];
	public messages: string[];

	/**
	 * Create an overall schedule for the given degrees
	 * @param major Degree[]
	 * @param minor Degree[], default to []
	 * @param semesters Semester[], default to []
	 */
	constructor(major: Degree[], minor: Degree[] = [], semesters: Semester[] = [])
	{
		// Initialize values
		this.majors    = [];
		this.minors    = [];
		this.semesters = [];
		this.credits   = 0;
		this.messages  = [];
		// Add the attributes to the overall schedule, each calls an update
		this.addMajor(major);
		this.addMinor(minor);
		this.addSemester(semesters);
	}

	/**
	 * Make overall schedule object from a parsed JSON
	 * @param json A json to create the overall schedule from
	 */
	static fromJson(json: IOverallSchedule): OverallSchedule
	{
		// List for created objects, not json
		let majorList: Degree[]      = [];
		let minorList: Degree[]      = [];
		let semesterList: Semester[] = [];

		// Loop through and create all the majors
		for (let majorItem of json.majors)
		{
			majorList.push(Degree.fromJson(majorItem));
		}

		// Loop through and create all the minors
		for (let minorItem of json.minors)
		{
			minorList.push(Degree.fromJson(minorItem));
		}

		// Loop through and create all the semesters
		for (let semesterItem of json.semesters)
		{
			// console.log("Push Semester Item");
			// console.log(Semester.fromJson(semesterItem));
			semesterList.push(Semester.fromJson(semesterItem));
		}

		// console.log("Schedule Constructor");
		// console.log(new OverallSchedule(majorList, minorList, semesterList));
		// Call the constructor
		return new OverallSchedule(majorList, minorList, semesterList);
	}

	/**
	 * Converts the Overall Schedule to a Json
	 */
	public toJson(): IOverallSchedule
	{
		// Create json from current attributes
		let json: IOverallSchedule =
			{
				"semesters": this.semesters,
				"credits":   this.credits,
				"majors":    this.majors,
				"minors":    this.minors,
				"messages":  this.messages
			};

		return json;
	}

	/**
	 * Add a semester to the overall schedule, modifies overall credits, difficulty, and
	 * messages
	 * @param newSemester Semester or semester list to add to the overall schedule
	 */
	public addSemester(newSemester: Semester | Semester[]): void
	{
		// Create semester array
		let semesterList: Semester[] = [];

		// If it's a single item, make it an array
		if (newSemester instanceof Semester)
		{
			semesterList[0] = newSemester;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			semesterList = newSemester;
		}

		// Loop through the list and add them
		for (let semesterItem of semesterList)
		{
			// Add the semester to overall list
			this.semesters.push(semesterItem);
		}
		// Update the attributes
		this.updateOverallSchedule();
	}

	/**
	 * Removes a semester from the overall schedule, modifies overall credits, difficulty,
	 * and messages
	 * @param oldSemester Semester or Semester list to be removed
	 */
	public removeSemester(oldSemester: Semester | Semester[]): void
	{
		// Create semester array
		let semesterList: Semester[] = [];

		// If it's a single item, make it an array
		if (oldSemester instanceof Semester)
		{
			semesterList[0] = oldSemester;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			semesterList = oldSemester;
		}

		// Loop through the list and add them
		for (let semesterItem of semesterList)
		{
			// Get location of the semester and remove it
			let indexOfSemester: number = this.semesters.indexOf(semesterItem);
			if(indexOfSemester != -1)
			{
				this.semesters.splice(indexOfSemester, 1);
			}
		}
		// Update the attributes
		this.updateOverallSchedule();
	}


	/**
	 * Add a major to the overall schedule, modifies overall credits, difficulty, and messages
	 * @param newMajor Major or major list to add to the overall schedule
	 */
	public addMajor(newMajor: Degree | Degree[]): void
	{
		// Create major array
		let majorList: Degree[] = [];

		// If it's a single item, make it an array
		if (newMajor instanceof Degree)
		{
			majorList[0] = newMajor;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			majorList = newMajor;
		}

		// Loop through the list and add them
		for (let majorItem of majorList)
		{
			// Add the major to overall list
			this.majors.push(majorItem);
		}
		// Update the attributes
		this.updateOverallSchedule();
	}

	/**
	 * Removes a Major from the overall schedule, modifies overall credits, difficulty,
	 * and messages
	 * @param oldMajor Major or Major list to be removed
	 */
	public removeMajor(oldMajor: Degree | Degree[]): void
	{
		// Create semester array
		let majorList: Degree[] = [];

		// If it's a single item, make it an array
		if (oldMajor instanceof Degree)
		{
			majorList[0] = oldMajor;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			majorList = oldMajor;
		}

		// Loop through the list and add them
		for (let semesterItem of majorList)
		{
			// Get location of the semester and remove it
			let indexOfMajor: number = this.majors.indexOf(semesterItem);
			if(indexOfMajor != -1)
			{
				this.majors.splice(indexOfMajor, 1);
			}
		}
		// Update the attributes
		this.updateOverallSchedule();
	}

	/**
	 * Add a minor to the overall schedule, modifies overall credits, difficulty, and messages
	 * @param newMinor Minor or minor list to add to the overall schedule
	 */
	public addMinor(newMinor: Degree | Degree[]): void
	{
		// Create minor array
		let minorList: Degree[] = [];

		// If it's a single item, make it an array
		if (newMinor instanceof Degree)
		{
			minorList[0] = newMinor;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			minorList = newMinor;
		}

		// Loop through the list and add them
		for (let minorItem of minorList)
		{
			// Add the minor to overall list
			this.minors.push(minorItem);
		}
		// Update the attributes
		this.updateOverallSchedule();
	}

	/**
	 * Removes a Minor from the overall schedule, modifies overall credits, difficulty,
	 * and messages
	 * @param oldMinor Minor or Minor list to be removed
	 */
	public removeMinor(oldMinor: Degree | Degree[]): void
	{
		// Create semester array
		let minorList: Degree[] = [];

		// If it's a single item, make it an array
		if (oldMinor instanceof Degree)
		{
			minorList[0] = oldMinor;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			minorList = oldMinor;
		}

		// Loop through the list and add them
		for (let minorItem of minorList)
		{
			// Get location of the semester and remove it
			let indexOfMinor: number = this.minors.indexOf(minorItem);
			if(indexOfMinor != -1)
			{
				this.minors.splice(indexOfMinor, 1);
			}
		}
		// Update the attributes
		this.updateOverallSchedule();
	}

	/**
	 * Triggers the updates for all the data collected from the semesters content
	 */
	private updateOverallSchedule(): void
	{
		// Update overall schedule attributes
		this.updateCredits();
		this.updateMessages();
	}

	/**
	 * Get the credit hours from each of the semesters
	 */
	private updateCredits(): void
	{
		// Reset number of credits
		this.credits = 0;

		// Sum up credits from each semester
		for (let semester of this.semesters)
		{
			this.credits += semester.credits;
		}
	}

	/**
	 * Find any issues from the overall schedule, including missing classes, completed
	 */
	private updateMessages(): void
	{
		// Reset the messages
		this.messages = [];

		// Do checks for message conditions
	}

}
