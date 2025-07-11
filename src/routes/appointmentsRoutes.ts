import { Router } from "express";
import { getPatientEligibility } from "../controllers/appointmentsController";

const router = Router();

router.post("/check_eligibility", getPatientEligibility);

export default router;
