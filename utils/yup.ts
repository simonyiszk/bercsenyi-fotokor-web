import * as Yup from "yup";

export const SubmitFormSchema = Yup.object().shape({
  monogramm: Yup.string().min(2).max(5).required(),
  photoType: Yup.string()
    .required()
    .matches(/^(analoge|digital)$/),
  file: Yup.mixed().required().nullable(false),
});
