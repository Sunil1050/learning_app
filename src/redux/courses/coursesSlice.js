import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      title: 'Understanding Basic Programming Concepts',
      description: 'This step might cover concepts like data types, variables, loops, and conditional statements.',
      resources: [
        { type: "Data types", description: "This video covers the data types in a programming language", url: "https://www.youtube.com/embed/dY2LQcE-Qvc" },
        { type: "Variables", description: "This video covers the variables in a programming language", url: "https://www.youtube.com/embed/snIUtdg0K30" },
        { type: "Loops", description: "This video covers the loops in a programming language", url: "https://www.youtube.com/embed/JkSQ8KtOA14" },
        { type: "Conditional Statements", description: "This video covers the conditional statements in a programming language", url: "https://www.youtube.com/embed/Fo5fV3Yfco8" },
      ],
      isVisited: false
    },
    {
      id: 2,
      title: 'Learning a Programming Language',
      description: 'This step might involve selecting a programming language like Python, Java, or JavaScript and learning the basics of that language.',
      resources: [
        { type: "Python Tutorial", description: "This video covers the basics to advanced Python programming language that you need to know", url: "https://www.youtube.com/embed/OLPbd-7Pp_8" },
        { type: "Java Tutorial", description: "This video covers the basics to advanced Java programming language that you need to know", url: "https://www.youtube.com/embed/lcJzw0JGfeE" },
        { type: "Javascript Tutorial", description: "This video covers the basics to advanced Javascript web based programming language that you need to know", url: "https://www.youtube.com/embed/dOnAC2Rr-6A" },
      ],
      isVisited: false
    },
    {
      id: 3,
      title: "Understanding Algorithms and Data structures",
      description: "This step might cover concepts like arrays, linked lists, stacks, queues, sorting algorithms, and searching algorithms",
      resources: [
        { type: "Arrays", description: "This video covers the arrays in Data structures", url: "https://www.youtube.com/embed/QjAGNquiLGU" },
        { type: "Linked Lists", description: "This video covers the linked list in a Data structures", url: "https://www.youtube.com/embed/ge8iG7JecR4" },
        { type: "Stacks", description: "This video covers the stacks in a Data structures", url: "https://www.youtube.com/embed/vZEuSFXSMDI" },
        { type: "Queues", description: "This video covers the queues in a Data structures", url: "https://www.youtube.com/embed/q5oOYxfOD1c" },
        { type: "Sorting algorithms", description: "This video covers the Sorting algorithms in a Data structures", url: "https://www.youtube.com/embed/nmhjrI-aW5o" },
        { type: "Searching algorithms", description: "This video covers the Searching algorithms in a Data structures", url: "https://www.youtube.com/embed/qBGLYzFF1aQ" },
      ],
      isVisited: false
    },
    {
      id: 4,
      title: "Building Simple Programs",
      description: "This step might involve writing simple programs that demonstrate the concepts covered in the previous steps",
      resources: [
        { type: "Simple Program Tutorial", description: "Learn how to write a logical synatax for simple programs from scratch",url: "https://www.youtube.com/embed/bJzb-RuUcMU" },
      ],
      isVisited: false
    },
    {
      id: 5,
      title: "Building Complex Programs",
      description: "This step might involve building larger programs that require the student to use the concepts they've learned in a more complex and integrated manner",
      resources: [
        { type: "Complex Program Tutorial", description: "Learn how to write and build complex logic when hierarchy of an application grows", url: "https://www.youtube.com/embed/oBt53YbR9Kk" },
      ],
      isVisited: false
    }
  ],
  progressPercent: 0
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    visitedCourse: (state, { payload }) => {
      state.courses = payload;
    },
    coursePercent: (state, {payload}) => {
      state.progressPercent = payload
    }
  }
})

export const { visitedCourse, coursePercent } = coursesSlice.actions;
export default coursesSlice.reducer;