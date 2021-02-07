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
  "duration": 229800000,
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
  "duration": 519000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 288901,
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
  "duration": 346099,
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
  "duration": 211000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 88100,
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
  "duration": 178800,
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
  "duration": 276899,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 109901,
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
  "duration": 464700,
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
  "duration": 231799,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 222300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 254400,
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
  "duration": 203500,
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
  "duration": 129900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 66199,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 91600,
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
  "duration": 228401,
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
  "duration": 126600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 216499,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 62899,
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
  "duration": 264499,
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
  "duration": 851200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 64500,
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
  "duration": 192999,
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
  "duration": 296100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 92200,
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
  "duration": 236301,
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
  "duration": 412101,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 230100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 63100,
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
  "duration": 373900,
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
  "duration": 307100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 276900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 224800,
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
  "duration": 244500,
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
  "duration": 113500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 61499,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 140300,
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
  "duration": 353299,
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
  "duration": 174500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 261500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 290500,
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
  "duration": 178700,
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
  "duration": 126500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 239999,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 208900,
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
  "duration": 192699,
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
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 62601,
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
  "duration": 191600,
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
  "duration": 119600,
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
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 212600,
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
  "duration": 980800,
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
  "duration": 683899,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 846301,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 15963800,
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
  "duration": 408600,
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
  "duration": 2008600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 202700,
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
  "duration": 352600,
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
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 197301,
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
  "duration": 391700,
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
  "duration": 306600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 229200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 129600,
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
  "duration": 386700,
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
  "duration": 271099,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.grade_is_pressed()"
});
formatter.result({
  "duration": 65801,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
});