

export const schemaValidator = (obj, schema) => {
    const { value, error: rawError } = schema.validate(obj, { abortEarly: false });
    let error = {};

    if (rawError) {
        error = rawError.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message.replace(`"${curr.path[0]}"`, "This field");
            return acc;
        }, {})
    }

    return {
        value,
        error,
        isInvalid: !!rawError
    }
}