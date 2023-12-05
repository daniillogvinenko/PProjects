import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "shared/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/storeProvider/ui/StoreProvider";

const container = document.getElementById("root");
if (!container) {
    throw new Error("Контейнер root не найден");
}
const root = createRoot(container);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>
);
