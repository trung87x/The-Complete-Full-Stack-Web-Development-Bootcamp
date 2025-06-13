// ================================================================
// REACT TODO APP – CẤU TRÚC CƠ BẢN & GIAO DIỆN BAN ĐẦU
// ================================================================

/* === 1. App.jsx – JSX ban đầu === */

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;

/* === 2. Ghi chú thêm về accessibility ===
- `aria-pressed` giúp screen reader hiểu trạng thái button: true/false.
- `role="list"` giúp phục hồi ngữ nghĩa list khi bị phá vỡ bởi CSS.
- `htmlFor` thay cho thuộc tính `for` (vì `for` là keyword trong JS).
- `defaultChecked` được dùng thay cho `checked` trong JSX.

→ Các cải tiến này giúp app thân thiện với người dùng dùng thiết bị hỗ trợ.
*/

/* === 3. CSS cơ bản được chèn ở index.css
→ File style đã có sẵn hướng dẫn, bạn có thể copy paste đoạn CSS vào index.css.
→ Các class như .btn, .stack-large, .visually-hidden… sẽ hoạt động sau khi thêm CSS.
*/

/* === 4. Ghi chú triển khai ===
- Nếu dùng Vite:
    + xóa App.css, react.svg và reset nội dung App.jsx theo hướng dẫn.
    + chạy lại với: npm run dev
- Sửa <title> trong index.html thành "TodoMatic".
*/

/* === 5. Hướng phát triển tiếp theo ===
✔ Tách giao diện thành component riêng (Todo, Form, FilterButton)
✔ Kết nối với state (useState)
✔ Xử lý sự kiện: thêm / sửa / xoá / đánh dấu hoàn thành
✔ Lọc theo trạng thái: All, Active, Completed
→ Các bước này sẽ được triển khai trong các bài học tiếp theo.
*/
