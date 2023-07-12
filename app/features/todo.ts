export type todoStatus = "doing" | "done" | "delete";

export default class model {
  id = 0;
  title = "";
  status: todoStatus = "doing";
}
