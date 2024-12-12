import Joi from "joi";

export const createNewReportValidation = (req, res, next) => {
  const schema = Joi.object({
    reportedUser: Joi.string().required(),
    reason: Joi.string().min(1).max(255).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "Bad Request", error: error.details[0].message });
  }
  next();
};
