import { SubmitFormSchema } from "@/utils/yup";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";

interface SubmitFormValues {
  monogramm: string;
  photoType: "analoge" | "digital";
  file: File | null;
}

const SubmitForm = () => {
  const initialValues: SubmitFormValues = {
    monogramm: "",
    photoType: "analoge",
    file: null,
  };

  const onSubmit = () => {};

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const [imgSrc, setImgSrc] = useState<string | null>(null);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SubmitFormSchema}
      >
        {({ errors, touched, setFieldValue, values }) => {
          return (
            <>
              <Form>
                <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-full max-w-xs">
                  <div>
                    <label htmlFor="monogramm" className="label">
                      Monogrammod:
                    </label>
                    <Field
                      className={clsx(
                        errors.monogramm && touched.monogramm && "input-error",
                        "input bg-gray-100 w-[6em] max-w-xs"
                      )}
                      id="monogramm"
                      name="monogramm"
                      placeholder="ab"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label htmlFor="photoType" className="label">
                      kép típusa:
                    </label>
                    <Field
                      as="select"
                      name="photoType"
                      id="photoType"
                      className="input bg-gray-100"
                    >
                      <option className="select" value="analoge">
                        analóg
                      </option>
                      <option className="select" value="digital">
                        digitális
                      </option>
                    </Field>
                  </div>

                  <input
                    id="file"
                    type="file"
                    name="file"
                    accept="image/png, image/webp, image/jpeg"
                    className="col-span-full"
                    onChange={(event) => {
                      if (event.target.files) {
                        setFieldValue("file", event.target?.files[0]);
                      }
                    }}
                  />
                </div>
                <div className="col-span-full">
                  <ul>
                    <li>
                      {errors.monogramm && touched.monogramm
                        ? errors.monogramm
                        : null}
                    </li>
                    <li>{errors.file && touched.file ? errors.file : null}</li>
                  </ul>
                </div>

                <button type={"submit"}>submit</button>
              </Form>

              <div></div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SubmitForm;
