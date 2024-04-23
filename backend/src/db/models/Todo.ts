import { Model } from "objection";
export class Todo extends Model {
  static get tableName() {
    return "todo";
  }

  //properties definitions
  id!: string;
  description!: string;
  done!: boolean;
  createdAt!: string;
  updatedAt!: string;

  //timestamp at the point of insertion
  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  //timestamp at the point of update
  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
