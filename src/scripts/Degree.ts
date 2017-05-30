import {Course} from './Course'

/**
 * Defines a degree
 */
export interface IDegree
{
	name: string;
	requiredCredits: number;
	requiredCourses: Course[];
}

/**
 * A major or minor that contains all required courses and other requirements
 */
export class Degree implements IDegree
{
	public name: string;
	public requiredCredits: number;
	public requiredCourses: Course[];
	// TODO: Way to account for electives

	/**
	 * Create degree from either
	 * @param name Name of major
	 * @param requiredCredits List of required courses
	 * @param requiredCourses Number of required credits
	 */
	constructor(name: string, requiredCredits: number, requiredCourses: Course[])
	{
		// Add the attributes to the degree
		this.name            = name;
		this.requiredCourses = requiredCourses;
		this.requiredCredits = requiredCredits;
	}

	/**
	 * Make degree from from a parsed JSON
	 * @param json A json to create the degree from
	 */
	static fromJson(json: IDegree): Degree
	{
		// List for created objects, not json
		let requiredCourseList: Course[] = [];

		// Loop through and create all the courses
		for (let courseItem of json.requiredCourses)
		{
			requiredCourseList.push(Course.fromJson(courseItem));
		}

		// Call the constructor
		return new Degree(json.name, json.requiredCredits, requiredCourseList);
	}

	/**
	 * Converts the Course to a Json
	 */
	public toJson(): IDegree
	{
		// Create json from current attributes
		let json: IDegree =
			{
				"name":            this.name,
				"requiredCredits": this.requiredCredits,
				"requiredCourses": this.requiredCourses
			};

		return json;
	}

	/**
	 * Add a required course to the degree
	 * @param newRequiredCourse to add to the required course list
	 */
	public addPrerequisites(newRequiredCourse: Course | Course[]): void
	{
		// Create course array
		let courseList: Course[] = [];

		// If it's a single item, make it an array
		if (newRequiredCourse instanceof Course)
		{
			courseList[0] = newRequiredCourse;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			courseList = newRequiredCourse;
		}

		// Loop through the list and add them
		for (let courseItem of courseList)
		{
			// Add the semester to overall list
			this.requiredCourses.push(courseItem);
		}
	}

}
