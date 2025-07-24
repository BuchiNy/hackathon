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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getExercise } from "../graphql/queries";
import { updateExercise } from "../graphql/mutations";
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
export default function ExerciseUpdateForm(props) {
  const {
    id: idProp,
    exercise: exerciseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    category: "",
    equipment: [],
    targetBodyParts: [],
    duration: "",
    prompt: "",
    reps: "",
    sets: "",
    weight: "",
    description: "",
    demoUrl: "",
    createdAt: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [category, setCategory] = React.useState(initialValues.category);
  const [equipment, setEquipment] = React.useState(initialValues.equipment);
  const [targetBodyParts, setTargetBodyParts] = React.useState(
    initialValues.targetBodyParts
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [prompt, setPrompt] = React.useState(initialValues.prompt);
  const [reps, setReps] = React.useState(initialValues.reps);
  const [sets, setSets] = React.useState(initialValues.sets);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [demoUrl, setDemoUrl] = React.useState(initialValues.demoUrl);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = exerciseRecord
      ? { ...initialValues, ...exerciseRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setCategory(cleanValues.category);
    setEquipment(cleanValues.equipment ?? []);
    setCurrentEquipmentValue("");
    setTargetBodyParts(cleanValues.targetBodyParts ?? []);
    setCurrentTargetBodyPartsValue("");
    setDuration(cleanValues.duration);
    setPrompt(cleanValues.prompt);
    setReps(cleanValues.reps);
    setSets(cleanValues.sets);
    setWeight(cleanValues.weight);
    setDescription(cleanValues.description);
    setDemoUrl(cleanValues.demoUrl);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [exerciseRecord, setExerciseRecord] = React.useState(exerciseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExercise.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExercise
        : exerciseModelProp;
      setExerciseRecord(record);
    };
    queryData();
  }, [idProp, exerciseModelProp]);
  React.useEffect(resetStateValues, [exerciseRecord]);
  const [currentEquipmentValue, setCurrentEquipmentValue] = React.useState("");
  const equipmentRef = React.createRef();
  const [currentTargetBodyPartsValue, setCurrentTargetBodyPartsValue] =
    React.useState("");
  const targetBodyPartsRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    category: [],
    equipment: [],
    targetBodyParts: [],
    duration: [],
    prompt: [],
    reps: [],
    sets: [],
    weight: [],
    description: [],
    demoUrl: [],
    createdAt: [],
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
          title,
          category: category ?? null,
          equipment: equipment ?? null,
          targetBodyParts: targetBodyParts ?? null,
          duration: duration ?? null,
          prompt: prompt ?? null,
          reps: reps ?? null,
          sets: sets ?? null,
          weight: weight ?? null,
          description: description ?? null,
          demoUrl: demoUrl ?? null,
          createdAt: createdAt ?? null,
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
            query: updateExercise.replaceAll("__typename", ""),
            variables: {
              input: {
                id: exerciseRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExerciseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              category: value,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment: values,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            values = result?.equipment ?? values;
          }
          setEquipment(values);
          setCurrentEquipmentValue("");
        }}
        currentFieldValue={currentEquipmentValue}
        label={"Equipment"}
        items={equipment}
        hasError={errors?.equipment?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("equipment", currentEquipmentValue)
        }
        errorMessage={errors?.equipment?.errorMessage}
        setFieldValue={setCurrentEquipmentValue}
        inputFieldRef={equipmentRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Equipment"
          isRequired={false}
          isReadOnly={false}
          value={currentEquipmentValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.equipment?.hasError) {
              runValidationTasks("equipment", value);
            }
            setCurrentEquipmentValue(value);
          }}
          onBlur={() => runValidationTasks("equipment", currentEquipmentValue)}
          errorMessage={errors.equipment?.errorMessage}
          hasError={errors.equipment?.hasError}
          ref={equipmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "equipment")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts: values,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
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
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration: value,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Prompt"
        isRequired={false}
        isReadOnly={false}
        value={prompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt: value,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.prompt ?? value;
          }
          if (errors.prompt?.hasError) {
            runValidationTasks("prompt", value);
          }
          setPrompt(value);
        }}
        onBlur={() => runValidationTasks("prompt", prompt)}
        errorMessage={errors.prompt?.errorMessage}
        hasError={errors.prompt?.hasError}
        {...getOverrideProps(overrides, "prompt")}
      ></TextField>
      <TextField
        label="Reps"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={reps}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps: value,
              sets,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.reps ?? value;
          }
          if (errors.reps?.hasError) {
            runValidationTasks("reps", value);
          }
          setReps(value);
        }}
        onBlur={() => runValidationTasks("reps", reps)}
        errorMessage={errors.reps?.errorMessage}
        hasError={errors.reps?.hasError}
        {...getOverrideProps(overrides, "reps")}
      ></TextField>
      <TextField
        label="Sets"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sets}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets: value,
              weight,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.sets ?? value;
          }
          if (errors.sets?.hasError) {
            runValidationTasks("sets", value);
          }
          setSets(value);
        }}
        onBlur={() => runValidationTasks("sets", sets)}
        errorMessage={errors.sets?.errorMessage}
        hasError={errors.sets?.hasError}
        {...getOverrideProps(overrides, "sets")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight: value,
              description,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description: value,
              demoUrl,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Demo url"
        isRequired={false}
        isReadOnly={false}
        value={demoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.demoUrl ?? value;
          }
          if (errors.demoUrl?.hasError) {
            runValidationTasks("demoUrl", value);
          }
          setDemoUrl(value);
        }}
        onBlur={() => runValidationTasks("demoUrl", demoUrl)}
        errorMessage={errors.demoUrl?.errorMessage}
        hasError={errors.demoUrl?.hasError}
        {...getOverrideProps(overrides, "demoUrl")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              category,
              equipment,
              targetBodyParts,
              duration,
              prompt,
              reps,
              sets,
              weight,
              description,
              demoUrl,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || exerciseModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || exerciseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
