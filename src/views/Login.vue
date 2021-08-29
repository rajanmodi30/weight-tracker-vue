<template>
  <Form @submit="submitFrom" :validation-schema="schema">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <Field name="password" type="password" />
    <ErrorMessage name="password" />

    <button>Submit</button>
  </Form>
</template>

<script>
import { mapActions } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  data: () => {
    const schema = yup.object({
      email: yup
        .string()
        .required()
        .email(),
      password: yup
        .string()
        .required()
        .min(8),
    });

    return {
      schema,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    ...mapActions("auth", ["login"]),
    submitFrom(values) {
      console.log("submit form", values);
      this.login({
        email: values.email,
        password: values.password,
      });
    },
  },
};
</script>
