import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * NeuvaTirzepatideChart
 *
 * Brand-forward chart using ONLY two colors: white and your primary brand color.
 * Default primary is #2F5F8D. The 15 mg line is highlighted in primary; all
 * other series render in white with varying opacity for separation.
 *
 * Usage:
 *   <NeuvaTirzepatideChart />
 *   <NeuvaTirzepatideChart primary="#2F5F8D" />
 *
 * Requires: `npm i recharts`
 */
export default function NeuvaTirzepatideChart({
  primary = "#2F5F8D",
  background = "#0d1012",
}: {
  primary?: string;
  background?: string;
}) {
  // Weeks sampled. Final values at week 72 match callouts on the right.
  const data = [
    { w: 0, placebo: 0, t5: 0, t10: 0, t15: 0 },
    { w: 4, placebo: -1.2, t5: -3.6, t10: -4.6, t15: -5.1 },
    { w: 8, placebo: -2.0, t5: -7.9, t10: -9.4, t15: -10.4 },
    { w: 12, placebo: -2.3, t5: -10.8, t10: -12.3, t15: -13.6 },
    { w: 16, placebo: -2.5, t5: -12.7, t10: -14.3, t15: -15.8 },
    { w: 20, placebo: -2.6, t5: -14.1, t10: -15.7, t15: -17.4 },
    { w: 24, placebo: -2.7, t5: -15.1, t10: -16.6, t15: -18.5 },
    { w: 36, placebo: -2.8, t5: -16.6, t10: -18.6, t15: -20.0 },
    { w: 48, placebo: -2.9, t5: -15.9, t10: -20.0, t15: -21.4 },
    { w: 60, placebo: -3.0, t5: -16.0, t10: -21.4, t15: -22.5 },
    { w: 72, placebo: -3.1, t5: -15.0, t10: -19.5, t15: -20.9 },
  ];

  const colors = {
    bg: background,
    grid: "rgba(255,255,255,0.08)",
    axis: "rgba(255,255,255,0.82)",
    ticks: "rgba(255,255,255,0.75)",
    // Series: only white and primary
    placebo: "rgba(255,255,255,0.45)",
    t5: "rgba(255,255,255,0.65)",
    t10: "rgba(255,255,255,0.9)",
    t15: primary, // highlight in brand color
  } as const;

  return (
    <div
      className="w-full rounded-3xl p-6 md:p-8"
      style={{ background: colors.bg }}
    >
      <div className="relative">
        {/* Brand vignette at the bottom-left using the primary color */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(120% 120% at 0% 100%, ${hexToRGBA(primary, 0.22)} 0%, rgba(13,16,18,0) 55%)`,
          }}
        />

        {/* Title */}
        <h2 className="relative z-10 text-center text-lg md:text-xl text-white/90 mb-3">
          Overall mean baseline weight ={" "}
          <span className="font-semibold">104.8kg</span>
        </h2>

        {/* Chart */}
        <div className="relative z-10 h-[360px] md:h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 80, bottom: 40, left: 40 }}
            >
              <CartesianGrid vertical={false} stroke={colors.grid} />

              {/* 0% Reference line */}
              <ReferenceLine y={0} stroke={colors.grid} strokeDasharray="3 6" />

              <XAxis
                dataKey="w"
                type="number"
                domain={[0, 72]}
                tick={{ fill: colors.ticks, fontSize: 12 }}
                axisLine={{ stroke: colors.axis }}
                tickLine={{ stroke: colors.axis }}
                allowDecimals={false}
              >
                <Label
                  value="Weeks since start"
                  position="bottom"
                  offset={20}
                  style={{ fill: colors.axis, fontSize: 14 }}
                />
              </XAxis>

              <YAxis
                domain={[-24, 0]}
                ticks={[0, -4, -8, -12, -16, -20, -24]}
                tick={{ fill: colors.ticks, fontSize: 12 }}
                axisLine={{ stroke: colors.axis }}
                tickLine={{ stroke: colors.axis }}
              >
                <Label
                  value="Percent change in body weight"
                  angle={-90}
                  position="insideLeft"
                  offset={-10}
                  style={{ fill: colors.axis, fontSize: 14 }}
                />
              </YAxis>

              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: colors.grid }}
              />

              {/* Lines (white, white, white, primary) */}
              <Line
                type="monotone"
                dataKey="placebo"
                name="Placebo"
                stroke={colors.placebo}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="t5"
                name="Tirzepatide, 5mg"
                stroke={colors.t5}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="t10"
                name="Tirzepatide, 10mg"
                stroke={colors.t10}
                strokeWidth={3.5}
                dot={false}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="t15"
                name="Tirzepatide, 15mg"
                stroke={colors.t15}
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Right callouts */}
          <div className="absolute top-6 right-2 md:right-4 text-sm md:text-base space-y-5">
            <LegendRow color={colors.placebo} label="Placebo" value="−3.1" />
            <LegendRow
              color={colors.t5}
              label="Tirzepatide, 5mg"
              value="−15.0"
            />
            <LegendRow
              color={colors.t10}
              label="Tirzepatide, 10mg"
              value="−19.5"
              hollow
            />
            <LegendRow
              color={colors.t15}
              label="Tirzepatide, 15mg"
              value="−20.9"
              filled
            />
          </div>

          {/* TRE footer label at far right of axis */}
          <div className="absolute bottom-4 right-8 text-white/70 text-xs md:text-sm tracking-wide">
            TRE
          </div>
        </div>
      </div>

      {/* Small print / disclosure area */}
      <p className="mt-4 text-white/70 text-xs leading-relaxed">
        Percent change shown vs. baseline. Curves are a stylized visualization
        using representative sample points; final week-72 values match published
        outcomes (−3.1%, −15.0%, −19.5%, −20.9%).
      </p>
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
  filled = false,
  hollow = false,
}: {
  color: string;
  label: string;
  value: string;
  filled?: boolean;
  hollow?: boolean;
}) {
  const ring = hollow ? `0 0 0 2px ${color} inset` : `0 0 0 2px ${color} inset`;
  return (
    <div className="flex items-center gap-3 justify-end">
      <span className="text-white/90 w-12 text-right font-medium">{value}</span>
      <span
        className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full"
        style={{ background: filled ? color : "transparent", boxShadow: ring }}
      />
      {label && <span className="text-white/85">{label}</span>}
    </div>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !Array.isArray(payload) || payload.length === 0) return null;

  const row = payload
    .filter(
      (p: any) => p && typeof p.value === "number" && Number.isFinite(p.value)
    )
    .sort((a: any, b: any) => (a.value as number) - (b.value as number));

  if (row.length === 0) return null;

  return (
    <div className="rounded-xl bg-white/95 text-gray-900 px-3 py-2 shadow-lg">
      <div className="text-xs font-medium opacity-70 mb-1">Week {label}</div>
      {row.map((p: any) => {
        const valText = formatPct(p.value);
        return (
          <div key={p.dataKey} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: p?.color || "#999" }}
            />
            <span className="opacity-70 w-28">{p?.name || p?.dataKey}</span>
            <span className="font-semibold">
              {valText}
              {valText !== "N/A" ? "%" : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Safely format a percentage with one decimal place.
function formatPct(n: unknown) {
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num)) return "N/A";
  return num.toLocaleString(undefined, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  });
}

// Convert a hex color to rgba string with alpha control.
function hexToRGBA(hex: string, alpha = 1) {
  try {
    let h = hex.trim().replace("#", "");
    if (h.length === 3) {
      h = h
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    if ([r, g, b].some((v) => Number.isNaN(v))) return hex;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch {
    return hex; // fallback to original string
  }
}

/**
 * Dev-only runtime tests
 */
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  try {
    console.assert(formatPct(0) === "0.0", "formatPct(0) should be 0.0");
    console.assert(
      formatPct(12.34) === "12.3",
      "formatPct(12.34) should round to 12.3"
    );
    console.assert(
      formatPct(-3.1) === "-3.1",
      "formatPct(-3.1) should stay -3.1"
    );
    console.assert(
      formatPct(NaN as unknown as number) === "N/A",
      "formatPct(NaN) should be N/A"
    );
    console.assert(
      formatPct(undefined as unknown as number) === "N/A",
      "formatPct(undefined) should be N/A"
    );
    console.assert(
      hexToRGBA("#2F5F8D", 0.22).startsWith("rgba(47, 95, 141,"),
      "hexToRGBA should convert brand hex to rgba"
    );
  } catch {
    // no-op
  }
}
