$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Grades.feature");
formatter.feature({
  "line": 1,
  "name": "Grades",
  "description": "\r\nCalculate student grades from thier exam score\r\n\r\nThe rules are:\r\n\r\nFor Reg Year\u003c\u003d15 less than 50 a fail, 50 to 59 a Pass and 60 or over a Merit\r\nFor Reg Year\u003e\u003d16 less than 50 a fail, 50 to 64 a Pass, 65 to 79 a Merit and 80 or over a Distinction",
  "id": "grades",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered \u003cReg Year\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "\u003cscore\u003e into a student record",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be \u003caward\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;",
  "rows": [
    {
      "cells": [
        "Reg Year",
        "score",
        "award"
      ],
      "line": 17,
      "id": "grades;enter-exam-score-into-student-record;;1"
    },
    {
      "cells": [
        "R15 or R16",
        "49",
        "Fail"
      ],
      "line": 18,
      "id": "grades;enter-exam-score-into-student-record;;2"
    },
    {
      "cells": [
        "R15 or R16",
        "50",
        "Pass"
      ],
      "line": 19,
      "id": "grades;enter-exam-score-into-student-record;;3"
    },
    {
      "cells": [
        "R15 or R16",
        "51",
        "Pass"
      ],
      "line": 20,
      "id": "grades;enter-exam-score-into-student-record;;4"
    },
    {
      "cells": [
        "R15 or R16",
        "59",
        "Pass"
      ],
      "line": 21,
      "id": "grades;enter-exam-score-into-student-record;;5"
    },
    {
      "cells": [
        "R15",
        "60",
        "Merit"
      ],
      "line": 22,
      "id": "grades;enter-exam-score-into-student-record;;6"
    },
    {
      "cells": [
        "R16",
        "60",
        "Pass"
      ],
      "line": 23,
      "id": "grades;enter-exam-score-into-student-record;;7"
    },
    {
      "cells": [
        "R15",
        "61",
        "Merit"
      ],
      "line": 24,
      "id": "grades;enter-exam-score-into-student-record;;8"
    },
    {
      "cells": [
        "R16",
        "61",
        "Pass"
      ],
      "line": 25,
      "id": "grades;enter-exam-score-into-student-record;;9"
    },
    {
      "cells": [
        "R15",
        "64",
        "Merit"
      ],
      "line": 26,
      "id": "grades;enter-exam-score-into-student-record;;10"
    },
    {
      "cells": [
        "R16",
        "64",
        "Pass"
      ],
      "line": 27,
      "id": "grades;enter-exam-score-into-student-record;;11"
    },
    {
      "cells": [
        "R15 or R16",
        "65",
        "Merit"
      ],
      "line": 28,
      "id": "grades;enter-exam-score-into-student-record;;12"
    },
    {
      "cells": [
        "R15 or R16",
        "79",
        "Merit"
      ],
      "line": 29,
      "id": "grades;enter-exam-score-into-student-record;;13"
    },
    {
      "cells": [
        "R15",
        "80",
        "Merit"
      ],
      "line": 30,
      "id": "grades;enter-exam-score-into-student-record;;14"
    },
    {
      "cells": [
        "R16",
        "80",
        "Distinction"
      ],
      "line": 31,
      "id": "grades;enter-exam-score-into-student-record;;15"
    },
    {
      "cells": [
        "R15",
        "81",
        "Merit"
      ],
      "line": 32,
      "id": "grades;enter-exam-score-into-student-record;;16"
    },
    {
      "cells": [
        "R16",
        "81",
        "Distinction"
      ],
      "line": 33,
      "id": "grades;enter-exam-score-into-student-record;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "49 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Fail",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 286103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 134900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 73200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Fail()"
});
formatter.result({
  "duration": 94400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "50 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 227600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 134500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 79800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "51 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 289800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 136000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 72900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "59 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 217900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 162900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 209700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "60 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 263700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 137600,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 128200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "60 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 136300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "61 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 218700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 181200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 182900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "61 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 307800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 263900,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "64 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 119400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 185400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "64 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Pass",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 389400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 245300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 194400,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Pass()"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "65 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 219700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 143700,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 129300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15 or R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "79 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    },
    {
      "val": "16",
      "offset": 23
    }
  ],
  "location": "GradeSteps.i_have_entered_R_or_R(int,int)"
});
formatter.result({
  "duration": 260000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "79",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 188200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 261100,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 328000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "80 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 330200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 327500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 207200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 647500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "80 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Distinction",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 217100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 279300,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 233000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 303000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "81 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Merit",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 339700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 320500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 223200,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Merit()"
});
formatter.result({
  "duration": 205800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Enter exam score into student record",
  "description": "",
  "id": "grades;enter-exam-score-into-student-record;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have entered R16",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "81 into a student record",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I press grade",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result on screen should be Distinction",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 16
    }
  ],
  "location": "GradeSteps.i_have_entered_R(int)"
});
formatter.result({
  "duration": 3510700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 0
    }
  ],
  "location": "GradeSteps.into_a_student_record(int)"
});
formatter.result({
  "duration": 2893500,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.i_press_grade()"
});
formatter.result({
  "duration": 1342000,
  "status": "passed"
});
formatter.match({
  "location": "GradeSteps.the_result_on_screen_should_be_Distinction()"
});
formatter.result({
  "duration": 472900,
  "status": "passed"
});
});