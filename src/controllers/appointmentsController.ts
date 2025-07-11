import { Request, Response } from "express";

import { healthieApiClient } from "../utils/healthieApiClient";
import { getAppointmentQuery } from "../graphql/queries/getAppointment";

export const getPatientEligibility = async (
  request: Request,
  response: Response
) => {
  const { resource_id } = request.body;
  const getAppointmentQueryVar = { id: resource_id };

  try {
    const queryResp = await healthieApiClient.post("", {
      query: getAppointmentQuery,
      variables: getAppointmentQueryVar,
    });
    const { appointment } = queryResp.data.data;
    console.log("APPOINTMENT", appointment);
  } catch (error) {
    console.error("Error querying the Healthie API", error);
  }
};
