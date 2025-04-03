export interface EquipmentPosition {
    equipmentId: string;
    positions: { date: string; lat: number; lon: number }[];
  }