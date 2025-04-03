import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment.model';
import { EquipmentState, EquipmentStateHistory } from '../models/state.model';
import { EquipmentPosition } from '../models/position.model';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private dataPath = '/assets/data/';

  constructor(private http: HttpClient) {}

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.dataPath}equipment.json`);
  }

  getEquipmentStates(): Observable<EquipmentState[]> {
    return this.http.get<EquipmentState[]>(`${this.dataPath}equipmentState.json`);
  }

  getEquipmentStateHistory(): Observable<EquipmentStateHistory[]> {
    return this.http.get<EquipmentStateHistory[]>(`${this.dataPath}equipmentStateHistory.json`);
  }

  getEquipmentPositions(): Observable<EquipmentPosition[]> {
    return this.http.get<EquipmentPosition[]>(`${this.dataPath}equipmentPositionHistory.json`);
  }
}
