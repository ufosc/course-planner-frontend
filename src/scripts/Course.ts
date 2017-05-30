/**
 * Defines a Course
 */
export interface ICourse
{
	name: string;
	ID: string;
	credits: number;
	professors: string[];
	description: string;
	prerequisites: Course[];
	difficultyRating: number;
	// Should be called InterCourse
}

/**
 * Contains all information about a course
 */
export class Course implements ICourse
{
	// From database
	public name: string;
	public ID: string;
	public credits: number;
	public professors: string[];
	public description: string;
	public prerequisites: Course[];
	public difficultyRating: number;
	// TODO: PostReqs?, Concurrent?, Completed?, notes?

	/**
	 * Creates a course
	 * @param name Class name
	 * @param ID Course number
	 * @param credits Number of credits for class
	 * @param professors List of professors who have taught the class
	 * @param description Course description
	 * @param prerequisites Prerequisites for this course, defaults to []
	 * @param difficultyRating Difficulty based of course evaluations
	 */
	constructor(name: string, ID: string, credits: number, professors: string[],
			description: string, prerequisites: Course[], difficultyRating: number)
	{
		// Add the attributes to the course
		this.name             = name;
		this.ID               = ID;
		this.credits          = credits;
		this.professors       = professors;
		this.description      = description;
		this.prerequisites    = prerequisites;
		this.difficultyRating = difficultyRating;
	}

	/**
	 * Make course object from from a parsed JSON
	 * @param json A json to create the course from
	 */
	static fromJson(json: ICourse): Course
	{
		// List for created objects, not json
		let prerequisiteList: Course[] = [];

		// Loop through and create all the courses
		for (let courseItem of json.prerequisites)
		{
			prerequisiteList.push(Course.fromJson(courseItem));
		}

		// Call the constructor
		return new Course(json.name, json.ID, json.credits, json.professors,
				json.description, prerequisiteList, json.difficultyRating);
	}

	/**
	 * Converts the Course to a Json
	 */
	public toJson(): ICourse
	{
		// Create json from current attributes
		let json: ICourse =
			{
				"name":             this.name,
				"ID":               this.ID,
				"credits":          this.credits,
				"professors":       this.professors,
				"description":      this.description,
				"prerequisites":    this.prerequisites,
				"difficultyRating": this.difficultyRating
			};

		return json;
	}

	/**
	 * Add a prerequisites to the course
	 * @param newPrerequisiteList Course to add to the prerequisite list
	 */
	public addPreReq(newPrerequisiteList: Course | Course[]): void
	{
		// Create course array
		let courseList: Course[] = [];

		// If it's a single item, make it an array
		if (newPrerequisiteList instanceof Course)
		{
			courseList[0] = newPrerequisiteList;
		}
		// It's an array, so just set it equal to our new array
		else
		{
			courseList = newPrerequisiteList;
		}

		// Loop through the list and add them
		for (let courseItem of courseList)
		{
			// Add the semester to overall list
			this.prerequisites.push(courseItem);
		}
	}

}
