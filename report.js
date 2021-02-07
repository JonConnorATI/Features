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
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record",
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
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;",
  "rows": [
    {
      "cells": [
        "Reg Year",
        "score",
        "award"
      ],
      "line": 16,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;1"
    },
    {
      "cells": [
        "R15 or R16",
        "49",
        "Fail"
      ],
      "line": 17,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;2"
    },
    {
      "cells": [
        "R15 or R16",
        "50",
        "Pass"
      ],
      "line": 18,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;3"
    },
    {
      "cells": [
        "R15 or R16",
        "51",
        "Pass"
      ],
      "line": 19,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;4"
    },
    {
      "cells": [
        "R15 or R16",
        "59",
        "Pass"
      ],
      "line": 20,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;5"
    },
    {
      "cells": [
        "R15",
        "60",
        "Merit"
      ],
      "line": 21,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;6"
    },
    {
      "cells": [
        "R16",
        "60",
        "Pass"
      ],
      "line": 22,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;7"
    },
    {
      "cells": [
        "R15",
        "61",
        "Merit"
      ],
      "line": 23,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;8"
    },
    {
      "cells": [
        "R16",
        "61",
        "Pass"
      ],
      "line": 24,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;9"
    },
    {
      "cells": [
        "R15",
        "64",
        "Merit"
      ],
      "line": 25,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;10"
    },
    {
      "cells": [
        "R16",
        "64",
        "Pass"
      ],
      "line": 26,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;11"
    },
    {
      "cells": [
        "R15 or R16",
        "65",
        "Merit"
      ],
      "line": 27,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;12"
    },
    {
      "cells": [
        "R15 or R16",
        "79",
        "Merit"
      ],
      "line": 28,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;13"
    },
    {
      "cells": [
        "R15",
        "80",
        "Merit"
      ],
      "line": 29,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;14"
    },
    {
      "cells": [
        "R16",
        "80",
        "Distinction"
      ],
      "line": 30,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;15"
    },
    {
      "cells": [
        "R15",
        "81",
        "Merit"
      ],
      "line": 31,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;16"
    },
    {
      "cells": [
        "R16",
        "81",
        "Distinction"
      ],
      "line": 32,
      "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 354398800,
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
  "duration": 217600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 124400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 268700,
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
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 263600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 214900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The student score of 51 is entered into a student record",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 283700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 21
    }
  ],
  "location": "GradeSteps.the_student_score_of_is_entered_into_a_student_record(int)"
});
formatter.result({
  "duration": 553900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 265600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 267000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 1598000,
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
  "duration": 176100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 118600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 548300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;6",
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
  "duration": 413100,
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
  "duration": 135700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 252300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 263600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R16",
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
  "duration": 400200,
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
  "duration": 335200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 312900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 343300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;8",
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
  "duration": 544600,
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
  "duration": 561800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 272600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 238600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R16",
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
  "duration": 471600,
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
  "duration": 368600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 111300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 302000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;10",
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
  "duration": 182100,
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
  "duration": 329500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 268000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R16",
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
  "duration": 607300,
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
  "duration": 3903400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 373400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 462900,
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
  "duration": 216000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 232300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 199700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R15 or R16",
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
    },
    {
      "val": "16",
      "offset": 33
    }
  ],
  "location": "GradeSteps.the_Registration_Year_is_R_or_R(int,int)"
});
formatter.result({
  "duration": 219300,
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
  "duration": 588800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 217800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 261000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;14",
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
  "duration": 386000,
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
  "duration": 309400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 281600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 248000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R16",
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
  "duration": 371100,
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
  "duration": 307400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 330700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 318500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;16",
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
  "duration": 505000,
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
  "duration": 1648300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 530800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 352300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades-for-different-registration-years;enter-exam-score-into-student-record;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "The Registration Year is R16",
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
  "duration": 1220400,
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
  "duration": 1745700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 1331200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 517300,
  "status": "passed"
});
});