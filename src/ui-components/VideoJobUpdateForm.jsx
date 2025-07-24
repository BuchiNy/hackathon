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
import { getVideoJob } from "../graphql/queries";
import { updateVideoJob } from "../graphql/mutations";
const client = generateClient();
export default function VideoJobUpdateForm(props) {
  const {
    id: idProp,
    videoJob: videoJobModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    status: "",
    prompt: "",
    videoUrl: "",
    s3Key: "",
    created_at: "",
    updated_at: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [status, setStatus] = React.useState(initialValues.status);
  const [prompt, setPrompt] = React.useState(initialValues.prompt);
  const [videoUrl, setVideoUrl] = React.useState(initialValues.videoUrl);
  const [s3Key, setS3Key] = React.useState(initialValues.s3Key);
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [updated_at, setUpdated_at] = React.useState(initialValues.updated_at);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = videoJobRecord
      ? { ...initialValues, ...videoJobRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setStatus(cleanValues.status);
    setPrompt(cleanValues.prompt);
    setVideoUrl(cleanValues.videoUrl);
    setS3Key(cleanValues.s3Key);
    setCreated_at(cleanValues.created_at);
    setUpdated_at(cleanValues.updated_at);
    setErrors({});
  };
  const [videoJobRecord, setVideoJobRecord] = React.useState(videoJobModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getVideoJob.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getVideoJob
        : videoJobModelProp;
      setVideoJobRecord(record);
    };
    queryData();
  }, [idProp, videoJobModelProp]);
  React.useEffect(resetStateValues, [videoJobRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    status: [{ type: "Required" }],
    prompt: [{ type: "Required" }],
    videoUrl: [],
    s3Key: [],
    created_at: [{ type: "Required" }],
    updated_at: [],
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
          userId,
          status,
          prompt,
          videoUrl: videoUrl ?? null,
          s3Key: s3Key ?? null,
          created_at,
          updated_at: updated_at ?? null,
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
            query: updateVideoJob.replaceAll("__typename", ""),
            variables: {
              input: {
                id: videoJobRecord.id,
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
      {...getOverrideProps(overrides, "VideoJobUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              status,
              prompt,
              videoUrl,
              s3Key,
              created_at,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              status: value,
              prompt,
              videoUrl,
              s3Key,
              created_at,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Prompt"
        isRequired={true}
        isReadOnly={false}
        value={prompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              status,
              prompt: value,
              videoUrl,
              s3Key,
              created_at,
              updated_at,
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
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              status,
              prompt,
              videoUrl: value,
              s3Key,
              created_at,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.videoUrl ?? value;
          }
          if (errors.videoUrl?.hasError) {
            runValidationTasks("videoUrl", value);
          }
          setVideoUrl(value);
        }}
        onBlur={() => runValidationTasks("videoUrl", videoUrl)}
        errorMessage={errors.videoUrl?.errorMessage}
        hasError={errors.videoUrl?.hasError}
        {...getOverrideProps(overrides, "videoUrl")}
      ></TextField>
      <TextField
        label="S3 key"
        isRequired={false}
        isReadOnly={false}
        value={s3Key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              status,
              prompt,
              videoUrl,
              s3Key: value,
              created_at,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.s3Key ?? value;
          }
          if (errors.s3Key?.hasError) {
            runValidationTasks("s3Key", value);
          }
          setS3Key(value);
        }}
        onBlur={() => runValidationTasks("s3Key", s3Key)}
        errorMessage={errors.s3Key?.errorMessage}
        hasError={errors.s3Key?.hasError}
        {...getOverrideProps(overrides, "s3Key")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={created_at}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              status,
              prompt,
              videoUrl,
              s3Key,
              created_at: value,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={updated_at}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              status,
              prompt,
              videoUrl,
              s3Key,
              created_at,
              updated_at: value,
            };
            const result = onChange(modelFields);
            value = result?.updated_at ?? value;
          }
          if (errors.updated_at?.hasError) {
            runValidationTasks("updated_at", value);
          }
          setUpdated_at(value);
        }}
        onBlur={() => runValidationTasks("updated_at", updated_at)}
        errorMessage={errors.updated_at?.errorMessage}
        hasError={errors.updated_at?.hasError}
        {...getOverrideProps(overrides, "updated_at")}
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
          isDisabled={!(idProp || videoJobModelProp)}
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
              !(idProp || videoJobModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
