import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import * as webpack from "webpack";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as webpackDevServer from "webpack-dev-server"; // чтобы было поле devServer
import { buildLoaders } from "./buildLoaders";
import type { buildConfigOptions } from "./types/types";

export const buildWebpackConfig = ({ paths, mode }: buildConfigOptions): webpack.Configuration => {
    const config: webpack.Configuration = {
        entry: paths.entry,
        mode,
        // много места съедает
        devtool: mode === "development" ? "inline-source-map" : undefined,
        output: {
            filename: "[hash:8].main.js",
            path: paths.output,
            clean: true,
        },
        module: {
            rules: buildLoaders({ mode }),
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            // абсолютные пути
            preferAbsolute: true,
            modules: [paths.src, "node_modules"],
            mainFiles: ["index"],
            alias: {},
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.htmlWebpackPlugin,
                // без publicPath динамические роуты (:id) работают некорректно
                publicPath: "/",
            }),
            // new MiniCssExtractPlugin({

            // }),
            new webpack.DefinePlugin({
                _IS_DEV_: Boolean(mode === "development"),
                _API_:
                    mode === "development"
                        ? JSON.stringify("http://localhost:8000/")
                        : JSON.stringify("https://p-projects-backend.vercel.app/"),
            }),
            new webpack.ProgressPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.themes,
                        to: paths.buildThemes,
                    },
                ],
            }),
        ],
        devServer:
            mode === "development"
                ? {
                      port: 3000,
                      open: true,
                      historyApiFallback: true,
                  }
                : undefined,
    };

    return config;
};
