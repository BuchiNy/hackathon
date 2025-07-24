/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      assignedPlans {
        nextToken
        __typename
      }
      createdPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      assignedPlans {
        nextToken
        __typename
      }
      createdPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      assignedPlans {
        nextToken
        __typename
      }
      createdPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      title
      category
      equipment
      targetBodyParts
      duration
      prompt
      reps
      sets
      weight
      description
      demoUrl
      createdAt
      usedInPlanItems {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      title
      category
      equipment
      targetBodyParts
      duration
      prompt
      reps
      sets
      weight
      description
      demoUrl
      createdAt
      usedInPlanItems {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      title
      category
      equipment
      targetBodyParts
      duration
      prompt
      reps
      sets
      weight
      description
      demoUrl
      createdAt
      usedInPlanItems {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onCreatePlan(filter: $filter, owner: $owner) {
      id
      name
      therapistID
      patientID
      createdAt
      status
      therapist {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      patient {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      items {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onUpdatePlan(filter: $filter, owner: $owner) {
      id
      name
      therapistID
      patientID
      createdAt
      status
      therapist {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      patient {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      items {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onDeletePlan(filter: $filter, owner: $owner) {
      id
      name
      therapistID
      patientID
      createdAt
      status
      therapist {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      patient {
        id
        name
        email
        role
        age
        gender
        injuryHistory
        conditions
        goals
        mobilityLevel
        painScale
        targetBodyParts
        availableEquipment
        preferredTime
        reminderEnabled
        createdAt
        updatedAt
        owner
        __typename
      }
      items {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePlanItem = /* GraphQL */ `
  subscription OnCreatePlanItem(
    $filter: ModelSubscriptionPlanItemFilterInput
    $owner: String
  ) {
    onCreatePlanItem(filter: $filter, owner: $owner) {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      plan {
        id
        name
        therapistID
        patientID
        createdAt
        status
        updatedAt
        owner
        __typename
      }
      exercise {
        id
        title
        category
        equipment
        targetBodyParts
        duration
        prompt
        reps
        sets
        weight
        description
        demoUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePlanItem = /* GraphQL */ `
  subscription OnUpdatePlanItem(
    $filter: ModelSubscriptionPlanItemFilterInput
    $owner: String
  ) {
    onUpdatePlanItem(filter: $filter, owner: $owner) {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      plan {
        id
        name
        therapistID
        patientID
        createdAt
        status
        updatedAt
        owner
        __typename
      }
      exercise {
        id
        title
        category
        equipment
        targetBodyParts
        duration
        prompt
        reps
        sets
        weight
        description
        demoUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePlanItem = /* GraphQL */ `
  subscription OnDeletePlanItem(
    $filter: ModelSubscriptionPlanItemFilterInput
    $owner: String
  ) {
    onDeletePlanItem(filter: $filter, owner: $owner) {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      plan {
        id
        name
        therapistID
        patientID
        createdAt
        status
        updatedAt
        owner
        __typename
      }
      exercise {
        id
        title
        category
        equipment
        targetBodyParts
        duration
        prompt
        reps
        sets
        weight
        description
        demoUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateExerciseLog = /* GraphQL */ `
  subscription OnCreateExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
    $owner: String
  ) {
    onCreateExerciseLog(filter: $filter, owner: $owner) {
      id
      patientID
      planID
      planItemID
      completedAt
      formScore
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateExerciseLog = /* GraphQL */ `
  subscription OnUpdateExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
    $owner: String
  ) {
    onUpdateExerciseLog(filter: $filter, owner: $owner) {
      id
      patientID
      planID
      planItemID
      completedAt
      formScore
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteExerciseLog = /* GraphQL */ `
  subscription OnDeleteExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
    $owner: String
  ) {
    onDeleteExerciseLog(filter: $filter, owner: $owner) {
      id
      patientID
      planID
      planItemID
      completedAt
      formScore
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
      id
      fromID
      toID
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      fromID
      toID
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      fromID
      toID
      content
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
