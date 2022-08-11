import * as Yup from "yup";

Yup.addMethod(Yup.string, "numOfNumbersInMonogramm", function (max: number) {
  const msg = "Nem lehet ennyi szám a monogrammban.";
  return this.test("numOfNumbersInMonogramm", msg, function (value): boolean {
    if (!value) return true;
    const numOfNumbers = value.replace(/\D/g, "").length;
    return max >= numOfNumbers;
  });
});

export const SubmitFormSchema = Yup.object().shape({
  monogramm: Yup.string().min(2).max(5).numOfNumbersInMonogramm(1).required(),
  photoType: Yup.string()
    .required()
    .matches(/^(analoge|digital)$/),
  file: Yup.mixed().required().nullable(false).notOneOf([null, undefined]),
});
