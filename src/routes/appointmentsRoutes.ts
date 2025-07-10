import { Router } from "express";
import { getPatientEligibility } from "../";

const router = Router();

router.get("/check_eligibility");
