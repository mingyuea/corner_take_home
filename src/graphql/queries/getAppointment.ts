export const getAppointmentQuery = `query GetAppointment($id: ID!) {
    appointment(id: $id) {
        id
        user {
            id
            dob
            full_name
            policies {
                id
                priority_type
                num 
                insurance_plan {
                    payer_id
                    payer_name
                }
            }
        }
    }
}`;
