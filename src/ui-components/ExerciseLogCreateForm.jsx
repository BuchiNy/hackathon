/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createExerciseLog } from "../graphql/mutations";
const client = generateClient();
export default function ExerciseLogCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    patientID: "",
    planID: "",
    planItemID: "",
    completedAt: "",
    formScore: "",
  };
  const [patientID, setPatientID] = React.useState(initialValues.patientID);
  const [planID, setPlanID] = React.useState(initialValues.planID);
  const [planItemID, setPlanItemID] = React.useState(initialValues.planItemID);
  const [completedAt, setCompletedAt] = React.useState(
    initialValues.completedAt
  );
  const [formScore, setFormScore] = React.useState(initialValues.formScore);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPatientID(initialValues.patientID);
    setPlanID(initialValues.planID);
    setPlanItemID(initialValues.planItemID);
    setCompletedAt(initialValues.completedAt);
    setFormScore(initialValues.formScore);
    setErrors({});
  };
  const validations = {
    patientID: [{ type: "Required" }],
    planID: [{ type: "Required" }],
    planItemID: [{ type: "Required" }],
    completedAt: [{ type: "Required" }],
    formScore: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          patientID,
          planID,
          planItemID,
          completedAt,
          formScore,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createExerciseLog.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExerciseLogCreateForm")}
      {...rest}
    >
      <TextField
        label="Patient id"
        isRequired={true}
        isReadOnly={false}
        value={patientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientID: value,
              planID,
              planItemID,
              completedAt,
              formScore,
            };
            const result = onChange(modelFields);
            value = result?.patientID ?? value;
          }
          if (errors.patientID?.hasError) {
            runValidationTasks("patientID", value);
          }
          setPatientID(value);
        }}
        onBlur={() => runValidationTasks("patientID", patientID)}
        errorMessage={errors.patientID?.errorMessage}
        hasError={errors.patientID?.hasError}
        {...getOverrideProps(overrides, "patientID")}
      ></TextField>
      <TextField
        label="Plan id"
        isRequired={true}
        isReadOnly={false}
        value={planID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientID,
              planID: value,
              planItemID,
              completedAt,
              formScore,
            };
            const result = onChange(modelFields);
            value = result?.planID ?? value;
          }
          if (errors.planID?.hasError) {
            runValidationTasks("planID", value);
          }
          setPlanID(value);
        }}
        onBlur={() => runValidationTasks("planID", planID)}
        errorMessage={errors.planID?.errorMessage}
        hasError={errors.planID?.hasError}
        {...getOverrideProps(overrides, "planID")}
      ></TextField>
      <TextField
        label="Plan item id"
        isRequired={true}
        isReadOnly={false}
        value={planItemID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientID,
              planID,
              planItemID: value,
              completedAt,
              formScore,
            };
            const result = onChange(modelFields);
            value = result?.planItemID ?? value;
          }
          if (errors.planItemID?.hasError) {
            runValidationTasks("planItemID", value);
          }
          setPlanItemID(value);
        }}
        onBlur={() => runValidationTasks("planItemID", planItemID)}
        errorMessage={errors.planItemID?.errorMessage}
        hasError={errors.planItemID?.hasError}
        {...getOverrideProps(overrides, "planItemID")}
      ></TextField>
      <TextField
        label="Completed at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={completedAt && convertToLocal(new Date(completedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              patientID,
              planID,
              planItemID,
              completedAt: value,
              formScore,
            };
            const result = onChange(modelFields);
            value = result?.completedAt ?? value;
          }
          if (errors.completedAt?.hasError) {
            runValidationTasks("completedAt", value);
          }
          setCompletedAt(value);
        }}
        onBlur={() => runValidationTasks("completedAt", completedAt)}
        errorMessage={errors.completedAt?.errorMessage}
        hasError={errors.completedAt?.hasError}
        {...getOverrideProps(overrides, "completedAt")}
      ></TextField>
      <TextField
        label="Form score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={formScore}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              patientID,
              planID,
              planItemID,
              completedAt,
              formScore: value,
            };
            const result = onChange(modelFields);
            value = result?.formScore ?? value;
          }
          if (errors.formScore?.hasError) {
            runValidationTasks("formScore", value);
          }
          setFormScore(value);
        }}
        onBlur={() => runValidationTasks("formScore", formScore)}
        errorMessage={errors.formScore?.errorMessage}
        hasError={errors.formScore?.hasError}
        {...getOverrideProps(overrides, "formScore")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
