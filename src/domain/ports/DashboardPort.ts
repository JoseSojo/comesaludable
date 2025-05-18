import { CardDashboard, GraphicStaticticsDashboard, TablesDataDashboard } from "../../infrastructure/interface/DashboardInterface";

export interface DashboardPort {
  card(): Promise<CardDashboard[]>;
  staticthics(): Promise<GraphicStaticticsDashboard[]>;
  tables(): Promise<TablesDataDashboard[]>;
}