import {Course} from './Course';
import {Difficulty} from './Difficulty';
import {SemesterMessages} from './Messages';

// Constants
const FULL_TIME_SUMMER_CREDITS = 9;
const FULL_TIME_SPRING_CREDITS = 12;
const FULL_TIME_FALL_CREDITS   = 12;

// Types of semesters
export enum Season
{
	Spring,
	Summer,
	Fall
}

/**
 * Defines a Semester
 */
export interface ISemester
{
	// From the courses
	courses: Course[];
	difficultyRating: number;
	credits: number;

	// For this semester
	year: number;
	season: Season;
	messages: string[];
}

/**
 * Contains information about each semester and provides messages
 */
export class Semester
{
	// From the courses
	public courses: Course[];
	public difficultyRating: number;
	public credits: number;

	// For this semester
	public year: number;
	public season: Season;
	public messages: string[];

	/**
	 * Create a semester
	 * @param year Number for the year
	 * @param season Season for the semester
	 * @param courses List of courses in this semester, defaults to []
	 */
	constructor(year: number, season: Season, courses: Course[] = [])
	{
		// Add the attributes to the semester, addCourse calls an update
		this.credits = 0;
		this.year    = year;
		this.season  = season;
		this.courses = [];
		this.addCourse(courses);
		// console.log("The Semester Constructor Credits " + this.theCredits);
	}

	/**
	 * Make semester object from a parsed JSON
	 * @param json A json to create the semester from
	 */
	static fromJson(json: ISemester): Semester
	{
		// List for created objects, not json
		let courseList: Course[] = [];

		// Loop through and create all the courses
		for (let courseItem of json.courses)
		{
			courseList.push(Course.fromJson(courseItem));
		}

		// Call the constructor
		// console.log("FromJson Semester");
		// console.log(new Semester(aJson.theYear, aJson.theSeason, courseList));

		return new Semester(json.year, json.season, courseList);
	}

	/**
	 * Converts the Semester to a Json
	 */
	public toJson(): ISemester
	{
		// Create json from current attributes
		let json: ISemester =
			{
				"courses":          this.courses,
				"difficultyRating": this.difficultyRating,
				"credits":          this.credits,
				"year":             this.year,
				"season":           this.season,
				"messages":         this.messages
			};

		return json;
	}

	/**
	 * Add a course to the semester, modifies semester credits, difficulty, and messages
	 * @param newCourse Course to add to the semester
	 */
	public addCourse(newCourse: Course | Course[]): void
	{
		// Create course array
		let courseList: Course[] = [];

		// If it's a single item, make it an array
		if (newCourse instanceof Course)
		{
			courseList[0] = newCourse;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			courseList = newCourse;
		}

		// Loop through the list and add them
		for (let courseItem of courseList)
		{
			// Add the semester to overall list
			this.courses.push(courseItem);

			// Update credits
			this.credits += courseItem.credits;
		}
		// Update the attributes
		this.updateSemester();
	}

	/**
	 * Removes a course from the semester, modifies semester credits, difficulty, and messages
	 * @param oldCourse Course to be removed
	 */
	public removeCourse(oldCourse: Course | Course[]): void
	{
		// Create semester array
		let courseList: Course[] = [];

		// If it's a single item, make it an array
		if (oldCourse instanceof Course)
		{
			courseList[0] = oldCourse;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			courseList = oldCourse;
		}

		// Loop through the list and add them
		for (let courseItem of courseList)
		{
			// Get location of the semester and remove it
			let indexOfCourse: number = this.courses.indexOf(courseItem);
			if(indexOfCourse != -1)
			{
				this.courses.splice(indexOfCourse, 1);

				// Update credits
				this.credits -= courseItem.credits;
			}
		}
		// Update the attributes
		this.updateSemester();
	}

	/**
	 * Triggers the updates for all the data collected from the course content
	 */
	private updateSemester(): void
	{
		this.updateDifficulty();
		this.updateMessages();
	}

	/**
	 * This updates the difficulty level of the semester by looking at the credits, course difficulty,
	 * and semester type
	 */
	private updateDifficulty(): void
	{
		// Check the difficulty of the semester by averaging them
		// TODO: Rethink the algorithm

		// Sum them all
		let sumOfDifficulty: number = 0;
		for (let course of this.courses)
		{
			sumOfDifficulty += course.difficultyRating;
		}

		// Average the courses
		let averageDifficulty: number = sumOfDifficulty / this.courses.length;

		// Get the integer version of the average
		this.difficultyRating = Number(averageDifficulty);
	}

	/**
	 * This updates the messages for this semester. Includes difficulty, insufficient credits
	 */
	private updateMessages(): void
	{
		// Get semester lists
		let messages: SemesterMessages = new SemesterMessages();

		// Clear the messages
		this.messages = [];

		// Fulltime check, summer, spring, and fall
		if ((this.season == Season.Summer && this.credits < FULL_TIME_SUMMER_CREDITS) ||
				(this.season == Season.Spring && this.credits < FULL_TIME_SPRING_CREDITS) ||
				(this.season == Season.Fall && this.credits < FULL_TIME_FALL_CREDITS))
		{
			// Add the fulltime message
			this.messages.push(messages.FullTime);
		}

		// Check the difficulty
		if (this.difficultyRating == Difficulty.Hard)
		{
			this.messages.push(messages.Hard);
		}
		else if (this.difficultyRating == Difficulty.Insane)
		{
			this.messages.push(messages.Insane);
		}
	}

}
