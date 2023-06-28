export const Validation = (values) => {
    const errors = {}
    const email_pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(values.name === "") {errors.name = "This field is required"}

    if(values.message === "") {errors.message = "This field is required"}

    if(values.email === "") {errors.email = "This field is required"} else if(!email_pattern.test(values.email)) {errors.email = "Please use a valid email address"}
    
    return (errors)
}