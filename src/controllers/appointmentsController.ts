import { Request, Response } from "express";

import { healthieApiClient } from "../utils/healthieApiClient";
import { getAppointmentQuery } from "../graphql/queries/getAppointment";

export const getPatientEligibility = async (req: Request, resp: Response) => {
  const { appointmentId } = req.params;
  const getAppointmentQueryVar = { id: appointmentId };

  const queryResp = await healthieApiClient.post("", {
    getAppointmentQuery,
    getAppointmentQueryVar,
  });

  const { appointment } = response.data;

  console.log("APPOINTMENT DATA", appointment);
};
