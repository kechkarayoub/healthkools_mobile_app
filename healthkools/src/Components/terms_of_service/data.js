import Config from 'react-native-config';
import { get } from "src/Store/locale";

const code_mode = Config.REACT_APP_CODE_MODE;
export const get_data = () => {
    return {
        cndp_declaration_number: "",
        company_address: "",
        company_capital: "",
        company_legal_status: "",
        company_name: "",
        responsable_address: "",
        responsable_full_name: "",
        site_name: get("general_information") && get("general_information").site_name ? get("general_information").site_name : "HealthKools",
        site_url: code_mode === "prod" ? "" : code_mode === "preprod" ? "" : code_mode === "server_dev" ? "" : "http://localhost:3000",
    };
}
