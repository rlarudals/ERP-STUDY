import Employee from "../../../model/Employee";
// import mongoose from "mongoose";

export default {
  Query: {
    viewEmployee: async (_, args) => {
      try {
        const result = await Employee.find();

        console.log(result);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
  Mutation: {
    createEmployee: async (_, args) => {
      const { name, attitude, team, birth } = args;

      try {
        const employeeResult = await Employee.create({
          name,
          attitude,
          team,
          birth,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    deleteEmployee: async (_, args) => {
      const { id } = args;

      try {
        const result = await Employee.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    updateEmployee: async (_, args) => {
      const { id, team } = args;

      try {
        const result = await Employee.updateOne(
          { _id: id },
          {
            $set: {
              team,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
