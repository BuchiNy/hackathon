/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserCreateForm(props) {
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
    name: "",
    email: "",
    role: "",
    age: "",
    gender: "",
    injuryHistory: "",
    conditions: [],
    goals: [],
    mobilityLevel: "",
    painScale: "",
    targetBodyParts: [],
    availableEquipment: [],
    preferredTime: "",
    reminderEnabled: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [role, setRole] = React.useState(initialValues.role);
  const [age, setAge] = React.useState(initialValues.age);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [injuryHistory, setInjuryHistory] = React.useState(
    initialValues.injuryHistory
  );
  const [conditions, setConditions] = React.useState(initialValues.conditions);
  const [goals, setGoals] = React.useState(initialValues.goals);
  const [mobilityLevel, setMobilityLevel] = React.useState(
    initialValues.mobilityLevel
  );
  const [painScale, setPainScale] = React.useState(initialValues.painScale);
  const [targetBodyParts, setTargetBodyParts] = React.useState(
    initialValues.targetBodyParts
  );
  const [availableEquipment, setAvailableEquipment] = React.useState(
    initialValues.availableEquipment
  );
  const [preferredTime, setPreferredTime] = React.useState(
    initialValues.preferredTime
  );
  const [reminderEnabled, setReminderEnabled] = React.useState(
    initialValues.reminderEnabled
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setRole(initialValues.role);
    setAge(initialValues.age);
    setGender(initialValues.gender);
    setInjuryHistory(initialValues.injuryHistory);
    setConditions(initialValues.conditions);
    setCurrentConditionsValue("");
    setGoals(initialValues.goals);
    setCurrentGoalsValue("");
    setMobilityLevel(initialValues.mobilityLevel);
    setPainScale(initialValues.painScale);
    setTargetBodyParts(initialValues.targetBodyParts);
    setCurrentTargetBodyPartsValue("");
    setAvailableEquipment(initialValues.availableEquipment);
    setCurrentAvailableEquipmentValue("");
    setPreferredTime(initialValues.preferredTime);
    setReminderEnabled(initialValues.reminderEnabled);
    setErrors({});
  };
  const [currentConditionsValue, setCurrentConditionsValue] =
    React.useState("");
  const conditionsRef = React.createRef();
  const [currentGoalsValue, setCurrentGoalsValue] = React.useState("");
  const goalsRef = React.createRef();
  const [currentTargetBodyPartsValue, setCurrentTargetBodyPartsValue] =
    React.useState("");
  const targetBodyPartsRef = React.createRef();
  const [currentAvailableEquipmentValue, setCurrentAvailableEquipmentValue] =
    React.useState("");
  const availableEquipmentRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    role: [{ type: "Required" }],
    age: [],
    gender: [],
    injuryHistory: [],
    conditions: [],
    goals: [],
    mobilityLevel: [],
    painScale: [],
    targetBodyParts: [],
    availableEquipment: [],
    preferredTime: [],
    reminderEnabled: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          role,
          age,
          gender,
          injuryHistory,
          conditions,
          goals,
          mobilityLevel,
          painScale,
          targetBodyParts,
          availableEquipment,
          preferredTime,
          reminderEnabled,
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
            query: createUser.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={true}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role: value,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age: value,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender: value,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Injury history"
        isRequired={false}
        isReadOnly={false}
        value={injuryHistory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory: value,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.injuryHistory ?? value;
          }
          if (errors.injuryHistory?.hasError) {
            runValidationTasks("injuryHistory", value);
          }
          setInjuryHistory(value);
        }}
        onBlur={() => runValidationTasks("injuryHistory", injuryHistory)}
        errorMessage={errors.injuryHistory?.errorMessage}
        hasError={errors.injuryHistory?.hasError}
        {...getOverrideProps(overrides, "injuryHistory")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions: values,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            values = result?.conditions ?? values;
          }
          setConditions(values);
          setCurrentConditionsValue("");
        }}
        currentFieldValue={currentConditionsValue}
        label={"Conditions"}
        items={conditions}
        hasError={errors?.conditions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("conditions", currentConditionsValue)
        }
        errorMessage={errors?.conditions?.errorMessage}
        setFieldValue={setCurrentConditionsValue}
        inputFieldRef={conditionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Conditions"
          isRequired={false}
          isReadOnly={false}
          value={currentConditionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.conditions?.hasError) {
              runValidationTasks("conditions", value);
            }
            setCurrentConditionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("conditions", currentConditionsValue)
          }
          errorMessage={errors.conditions?.errorMessage}
          hasError={errors.conditions?.hasError}
          ref={conditionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "conditions")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals: values,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            values = result?.goals ?? values;
          }
          setGoals(values);
          setCurrentGoalsValue("");
        }}
        currentFieldValue={currentGoalsValue}
        label={"Goals"}
        items={goals}
        hasError={errors?.goals?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("goals", currentGoalsValue)
        }
        errorMessage={errors?.goals?.errorMessage}
        setFieldValue={setCurrentGoalsValue}
        inputFieldRef={goalsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Goals"
          isRequired={false}
          isReadOnly={false}
          value={currentGoalsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.goals?.hasError) {
              runValidationTasks("goals", value);
            }
            setCurrentGoalsValue(value);
          }}
          onBlur={() => runValidationTasks("goals", currentGoalsValue)}
          errorMessage={errors.goals?.errorMessage}
          hasError={errors.goals?.hasError}
          ref={goalsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "goals")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Mobility level"
        isRequired={false}
        isReadOnly={false}
        value={mobilityLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel: value,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.mobilityLevel ?? value;
          }
          if (errors.mobilityLevel?.hasError) {
            runValidationTasks("mobilityLevel", value);
          }
          setMobilityLevel(value);
        }}
        onBlur={() => runValidationTasks("mobilityLevel", mobilityLevel)}
        errorMessage={errors.mobilityLevel?.errorMessage}
        hasError={errors.mobilityLevel?.hasError}
        {...getOverrideProps(overrides, "mobilityLevel")}
      ></TextField>
      <TextField
        label="Pain scale"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={painScale}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale: value,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.painScale ?? value;
          }
          if (errors.painScale?.hasError) {
            runValidationTasks("painScale", value);
          }
          setPainScale(value);
        }}
        onBlur={() => runValidationTasks("painScale", painScale)}
        errorMessage={errors.painScale?.errorMessage}
        hasError={errors.painScale?.hasError}
        {...getOverrideProps(overrides, "painScale")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts: values,
              availableEquipment,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            values = result?.targetBodyParts ?? values;
          }
          setTargetBodyParts(values);
          setCurrentTargetBodyPartsValue("");
        }}
        currentFieldValue={currentTargetBodyPartsValue}
        label={"Target body parts"}
        items={targetBodyParts}
        hasError={errors?.targetBodyParts?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "targetBodyParts",
            currentTargetBodyPartsValue
          )
        }
        errorMessage={errors?.targetBodyParts?.errorMessage}
        setFieldValue={setCurrentTargetBodyPartsValue}
        inputFieldRef={targetBodyPartsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Target body parts"
          isRequired={false}
          isReadOnly={false}
          value={currentTargetBodyPartsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.targetBodyParts?.hasError) {
              runValidationTasks("targetBodyParts", value);
            }
            setCurrentTargetBodyPartsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("targetBodyParts", currentTargetBodyPartsValue)
          }
          errorMessage={errors.targetBodyParts?.errorMessage}
          hasError={errors.targetBodyParts?.hasError}
          ref={targetBodyPartsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "targetBodyParts")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment: values,
              preferredTime,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            values = result?.availableEquipment ?? values;
          }
          setAvailableEquipment(values);
          setCurrentAvailableEquipmentValue("");
        }}
        currentFieldValue={currentAvailableEquipmentValue}
        label={"Available equipment"}
        items={availableEquipment}
        hasError={errors?.availableEquipment?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "availableEquipment",
            currentAvailableEquipmentValue
          )
        }
        errorMessage={errors?.availableEquipment?.errorMessage}
        setFieldValue={setCurrentAvailableEquipmentValue}
        inputFieldRef={availableEquipmentRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Available equipment"
          isRequired={false}
          isReadOnly={false}
          value={currentAvailableEquipmentValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.availableEquipment?.hasError) {
              runValidationTasks("availableEquipment", value);
            }
            setCurrentAvailableEquipmentValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "availableEquipment",
              currentAvailableEquipmentValue
            )
          }
          errorMessage={errors.availableEquipment?.errorMessage}
          hasError={errors.availableEquipment?.hasError}
          ref={availableEquipmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "availableEquipment")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Preferred time"
        isRequired={false}
        isReadOnly={false}
        value={preferredTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime: value,
              reminderEnabled,
            };
            const result = onChange(modelFields);
            value = result?.preferredTime ?? value;
          }
          if (errors.preferredTime?.hasError) {
            runValidationTasks("preferredTime", value);
          }
          setPreferredTime(value);
        }}
        onBlur={() => runValidationTasks("preferredTime", preferredTime)}
        errorMessage={errors.preferredTime?.errorMessage}
        hasError={errors.preferredTime?.hasError}
        {...getOverrideProps(overrides, "preferredTime")}
      ></TextField>
      <SwitchField
        label="Reminder enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={reminderEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              email,
              role,
              age,
              gender,
              injuryHistory,
              conditions,
              goals,
              mobilityLevel,
              painScale,
              targetBodyParts,
              availableEquipment,
              preferredTime,
              reminderEnabled: value,
            };
            const result = onChange(modelFields);
            value = result?.reminderEnabled ?? value;
          }
          if (errors.reminderEnabled?.hasError) {
            runValidationTasks("reminderEnabled", value);
          }
          setReminderEnabled(value);
        }}
        onBlur={() => runValidationTasks("reminderEnabled", reminderEnabled)}
        errorMessage={errors.reminderEnabled?.errorMessage}
        hasError={errors.reminderEnabled?.hasError}
        {...getOverrideProps(overrides, "reminderEnabled")}
      ></SwitchField>
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
