import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DateTimePicker, TextField } from "react-native-ui-lib";
import { Controller, useForm } from "react-hook-form";
import { ToDoSchema } from "@/store/collection/todo";
import dayjs from "dayjs";

export default function CreateForm() {
  const { control } = useForm<ToDoSchema>();

  return (
    <View>
      <Text>createForm</Text>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <TextField
              placeholder={"Enter title"}
              floatingPlaceholder
              onChangeText={field.onChange}
              showCharCounter
              maxLength={30}
            />
          );
        }}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <TextField
              placeholder={"Enter description"}
              floatingPlaceholder
              onChangeText={field.onChange}
              showCharCounter
              maxLength={30}
            />
          );
        }}
      />
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <DateTimePicker
              onChange={(text) => {
                field.onChange(dayjs(text).toISOString());
              }}
              dateTimeFormatter={(value) => {
                return dayjs(value).format("DD MMM YYYY");
              }}
              placeholder={"Enter date"}
              mode={"date"}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
