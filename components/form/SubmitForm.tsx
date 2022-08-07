import { SubmitFormSchema } from "@/utils/yup";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import FileInputButton from "../typography/FileInputButton";

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

  const [imgFile, setImgFile] = useState<File | null>(null);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SubmitFormSchema}
      >
        {({ errors, touched, setFieldValue, setFieldTouched, values }) => {
          return (
            <>
              <Form>
                <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-full ">
                  <div>
                    <label htmlFor="monogramm" className="label">
                      Monogrammod:
                    </label>
                    <Field
                      className={clsx(
                        errors.monogramm && touched.monogramm && "input-error",
                        "input bg-base-200  w-full"
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
                      className="input bg-base-200 w-full"
                    >
                      <option className="select" value="analoge">
                        analóg
                      </option>
                      <option className="select" value="digital">
                        digitális
                      </option>
                    </Field>
                  </div>
                  <div className="col-span-full">
                    <FileInputButton
                      options={{
                        accept: "image/png, image/jpeg, image/webp",
                        name: "file",
                        id: "file",
                      }}
                      handleFile={(f) => {
                        setImgFile(f);
                        setFieldValue("file", f);
                      }}
                      isAccepted={!!imgFile}
                    />
                  </div>
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

                <button
                  className="w-full text-black bg-fotokor-zold rounded-sm px-4 py-1 text-base font-normal text-center"
                  type={"submit"}
                >
                  submit
                </button>
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
