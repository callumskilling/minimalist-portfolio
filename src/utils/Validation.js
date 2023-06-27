export const Validation = (values) => {
    const errors = {}

    if(values.name === "") {errors.name = "This field is required"}
    if(values.message === "") {errors.message = "This field is required"}
    if(values.email === "") {errors.email = "This field is required"}

    return (errors)
}