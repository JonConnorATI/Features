$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Grades.feature");
formatter.feature({
  "line": 1,
  "name": "Grades for different Registration Years",
  "description": "\r\nCalculate student grades from thier exam score.\r\n\r\nThe rules are:\r\nFor Reg Year\u003c\u003d15 score less than 50 a fail, 50 to 59 a Pass and 60 or over a Merit.\r\nFor Reg Year\u003e\u003d16 score less than 50 a fail, 50 to 64 a Pass, 65 to 79 a Merit and 80 or over a Distinction.",
  "id": "grades-for-different-registration-years",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is \u003cReg Year\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of \u003cscore\u003e is entered into a student record",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be \u003caward\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;",
  "rows": [
    {
      "cells": [
        "Reg Year",
        "score",
        "award"
      ],
      "line": 16,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;1"
    },
    {
      "cells": [
        "R15",
        "49",
        "Fail"
      ],
      "line": 17,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;2"
    },
    {
      "cells": [
        "R15",
        "50",
        "Pass"
      ],
      "line": 18,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;3"
    },
    {
      "cells": [
        "R15",
        "59",
        "Pass"
      ],
      "line": 19,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;4"
    },
    {
      "cells": [
        "R15",
        "60",
        "Merit"
      ],
      "line": 20,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;5"
    },
    {
      "cells": [
        "R15",
        "61",
        "Merit"
      ],
      "line": 21,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;6"
    },
    {
      "cells": [
        "R15",
        "64",
        "Merit"
      ],
      "line": 22,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;7"
    },
    {
      "cells": [
        "R15",
        "65",
        "Merit"
      ],
      "line": 23,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;8"
    },
    {
      "cells": [
        "R15",
        "79",
        "Merit"
      ],
      "line": 24,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;9"
    },
    {
      "cells": [
        "R15",
        "80",
        "Merit"
      ],
      "line": 25,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;10"
    },
    {
      "cells": [
        "R15",
        "81",
        "Merit"
      ],
      "line": 26,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 49 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Fail",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 339731300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 193300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 117400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 50 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 400600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 137700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 114700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 59 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 271300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 154800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 73100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 60 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 245400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 161500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 288100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 61 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 446300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 141100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 142400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 64 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 213300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 141300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 234100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 65 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 247100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 340900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 237200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 250500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 79 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 202600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "79",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 80 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 130500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 71100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 69300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Enter exam score into a R\u003c\u003d15 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003c\u003d15-student-record;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 81 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 205800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 304100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 244800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 226200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is \u003cReg Year\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of \u003cscore\u003e is entered into a student record",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be \u003caward\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;",
  "rows": [
    {
      "cells": [
        "Reg Year",
        "score",
        "award"
      ],
      "line": 35,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;1"
    },
    {
      "cells": [
        "R16",
        "49",
        "Fail"
      ],
      "line": 36,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;2"
    },
    {
      "cells": [
        "R16",
        "50",
        "Pass"
      ],
      "line": 37,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;3"
    },
    {
      "cells": [
        "R16",
        "59",
        "Pass"
      ],
      "line": 38,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;4"
    },
    {
      "cells": [
        "R16",
        "60",
        "Pass"
      ],
      "line": 39,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;5"
    },
    {
      "cells": [
        "R16",
        "61",
        "Pass"
      ],
      "line": 40,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;6"
    },
    {
      "cells": [
        "R16",
        "64",
        "Pass"
      ],
      "line": 41,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;7"
    },
    {
      "cells": [
        "R16",
        "65",
        "Merit"
      ],
      "line": 42,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;8"
    },
    {
      "cells": [
        "R16",
        "79",
        "Merit"
      ],
      "line": 43,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;9"
    },
    {
      "cells": [
        "R16",
        "80",
        "Distinction"
      ],
      "line": 44,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;10"
    },
    {
      "cells": [
        "R16",
        "81",
        "Distinction"
      ],
      "line": 45,
      "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 49 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Fail",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 208200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 137900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 221400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 256700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 50 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 186500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 282500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 495800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 524800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 59 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 504000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 353800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 308900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 239000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 60 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 653400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 339000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 268900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 61 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 240100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 83900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 64 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 2257300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 1021900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 484100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 65 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 422500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 335400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 234800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 79 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 255500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "79",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 285600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 398000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 80 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Distinction",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 982900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 331700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 59600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 254400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Enter exam score into a R\u003e\u003d16 student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-a-r\u003e\u003d16-student-record;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "The Registration Year is R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The student score of 81 is entered into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Grade is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result on screen should be Distinction",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R(int)"
});
formatter.result({
  "duration": 362500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 284700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 378500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 298800,
  "status": "passed"
});
});