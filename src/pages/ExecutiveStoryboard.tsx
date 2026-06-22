import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  DatabaseZap,
  FileSearch,
  FileText,
  GitBranch,
  Globe2,
  Lightbulb,
  Package,
  ShieldAlert,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { loadDemoData } from "@/lib/storage";

export function ExecutiveStoryboard() {
  const { systems, vendors, tasks } = loadDemoData();
  const hndlHigh = systems.filter((s) => s.hndlRiskScore >= 70).length;
  const vendorGap = vendors.filter((v) => v.pqcRoadmapStatus === "未提供").length;
  const pendingTasks = tasks.filter((t) => t.status !== "completed").length;
  const policyImpactSystems = systems.filter((s) => s.hasExternalApi).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lightbulb className="h-4 w-4" />
          Executive Storyboard
        </div>
        <h2 className="mt-1 text-2xl font-semibold">PQC 量子韌性治理平台</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          後量子密碼前期盤點治理工具 — 對齊金管會 2026-06-18 PQC 遷移參考指引七大策略方向
        </p>
      </div>

      {/* Why Now */}
      <section>
        <SectionLabel icon={Zap} label="為何現在啟動" color="rose" />
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <WhyNowCard
            title="FSC 金融資安韌性發展藍圖"
            body="金管會已將 PQC 遷移準備納入金融資安韌性發展藍圖，銀行需證明已啟動盤點與準備工作。"
            badge="監理壓力"
            badgeVariant="risk"
          />
          <WhyNowCard
            title="新興科技治理議題同步湧現"
            body="PQC、智慧化系統風險、API 安全、供應商科技韌性等議題在同一時間點匯聚，既有 GRC 流程難以快速完成前期盤點與責任分派。"
            badge="治理缺口"
            badgeVariant="warning"
          />
          <WhyNowCard
            title="量子威脅時間窗口有限"
            body="HNDL（Harvest Now, Decrypt Later）威脅已是現在式。攻擊者正在蒐集加密資料，等待量子運算成熟後解密。"
            badge="即時風險"
            badgeVariant="risk"
          />
        </div>
      </section>

      {/* What We Solve */}
      <section>
        <SectionLabel icon={AlertTriangle} label="管理痛點" color="amber" />
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              icon: Users,
              title: "業務、資安、採購、供應商語言不通",
              body: "業務填「保單系統很重要」，資安需要的是「RSA 2048 憑證有效期、是否含外部交換」。現有工具各說各話。",
            },
            {
              icon: FileSearch,
              title: "盤點資料分散且品質不一",
              body: "盤點結果散落在 Excel、Email、SharePoint 各處，無法跨系統比較，也很難即時發現欄位缺漏。",
            },
            {
              icon: ShieldAlert,
              title: "風險判斷缺乏可解釋性",
              body: "「高風險」只是一個標籤，沒有說明為什麼、對應哪條規則、依據哪項政策。主管無法判斷是否合理。",
            },
            {
              icon: GitBranch,
              title: "政策更新後補件困難",
              body: "新監理要求發布後，無法快速找出哪些系統需要補件、補什麼欄位、誰來負責。",
            },
            {
              icon: ClipboardList,
              title: "會議後缺乏證據包與待辦追蹤",
              body: "主管會議討論完就沒有後續。沒有結構化紀錄、補件清單，也無法稽核哪些決議被執行。",
            },
            {
              icon: Building2,
              title: "跨部門責任不清",
              body: "同一個議題，業務、系統 Owner、資安、採購各有一部分責任，但沒有工具讓每個角色看到自己的待辦。",
            },
          ].map((item) => (
            <div className="rounded-lg border bg-muted/20 p-4" key={item.title}>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <item.icon className="h-4 w-4 text-amber-600" />
                {item.title}
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section>
        <SectionLabel icon={ArrowRight} label="平台運作流程" color="blue" />
        <div className="mt-3">
          <div className="grid gap-2 md:grid-cols-6">
            {[
              {
                icon: ClipboardList,
                step: "1",
                title: "Intake",
                body: "用業務看得懂的情境式問題收斂系統、資料、外部串接與供應商資訊",
                path: "/pqc-intake",
              },
              {
                icon: ShieldAlert,
                step: "2",
                title: "Rule-based Risk Explanation",
                body: "以明確規則計算風險，每條規則都有編號、原因與政策來源，避免黑箱判斷",
                path: "/hndl",
              },
              {
                icon: AlertTriangle,
                step: "3",
                title: "Guardrails",
                body: "7 條防呆規則偵測缺漏欄位、矛盾標籤，指派到負責角色",
                path: "/",
              },
              {
                icon: Package,
                step: "4",
                title: "Evidence Pack",
                body: "Snapshot + 風險說明 + 防呆 + 政策依據 + 待辦 + 已知限制",
                path: "/report",
              },
              {
                icon: Users,
                step: "5",
                title: "Tasks",
                body: "將業務白話轉成資安、採購、供應商可執行的待辦，並保留觸發原因",
                path: "/tasks",
              },
              {
                icon: GitBranch,
                step: "6",
                title: "Lineage",
                body: "每題、每條規則、每個報告欄位都可追溯政策來源，政策更新後可掃描缺口",
                path: "/lineage",
              },
            ].map((item, index) => (
              <div className="relative rounded-lg border bg-background p-4" key={item.step}>
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                      {item.title}
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.body}</p>
                  </div>
                </div>
                {index < 5 && (
                  <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Leaders See */}
      <section>
        <SectionLabel icon={BadgeCheck} label="主管視角" color="emerald" />
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <LeaderCard
            icon={DatabaseZap}
            title="高風險系統清單"
            metric={hndlHigh}
            metricLabel="個 HNDL 高風險系統（示範資料）"
            body="每個系統均標示觸發規則、風險原因與負責部門，非單純數字揭示。"
            tone="danger"
          />
          <LeaderCard
            icon={Globe2}
            title="HNDL 長期資料風險"
            metric={systems.filter((s) => s.dataRetentionYears >= 10).length}
            metricLabel="個系統資料保存 ≥ 10 年"
            body="攻擊者現在蒐集、未來量子時代解密。長期保存的敏感資料是 PQC 遷移優先對象。"
            tone="danger"
          />
          <LeaderCard
            icon={ShieldCheck}
            title="供應商準備度缺口"
            metric={vendorGap}
            metricLabel="個供應商尚未提供 PQC 遷移計畫"
            body="供應商 PQC 準備狀態是遷移關鍵瓶頸，需逐一追蹤路線圖回覆進度。"
            tone="warn"
          />
          <LeaderCard
            icon={Users}
            title="跨部門待辦壓力"
            metric={pendingTasks}
            metricLabel="件待辦尚未完成（示範資料）"
            body="依業務、系統 Owner、資安、架構、採購、供應商分類，每個角色看到自己的責任範圍。"
            tone="warn"
          />
          <LeaderCard
            icon={AlertTriangle}
            title="政策變更影響"
            metric={policyImpactSystems}
            metricLabel="個系統涉及外部 API 或跨機構交換"
            body="監理要求更新時，可快速找出受影響系統、缺漏欄位與負責角色。"
            tone="warn"
          />
          <LeaderCard
            icon={GitBranch}
            title="合規補件壓力"
            metric={systems.filter((s) => s.status !== "completed").length}
            metricLabel="個系統尚未完成盤點"
            body="政策更新後可掃描缺口、產生補件任務並指派角色。"
            tone="default"
          />
        </div>
      </section>

      {/* Demo Walkthrough — compact nav grid */}
      <section>
        <SectionLabel icon={FileText} label="功能模組導覽" color="indigo" />
        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { step: "1", title: "全行風險總覽", path: "/", note: "KPI、告警、HNDL 排行" },
            { step: "2", title: "HNDL（長期資料解密風險）分析", path: "/hndl", note: "觸發規則透明可追溯" },
            { step: "3", title: "供應商準備度", path: "/vendors", note: "PQC 路線圖追蹤" },
            { step: "4", title: "跨部門待辦", path: "/tasks", note: "業務語言雙向轉譯" },
            { step: "5", title: "治理依據追溯", path: "/lineage", note: "政策應變模擬" },
            { step: "6", title: "遷移優先序", path: "/migration", note: "Wave 計畫規劃" },
            { step: "7", title: "盤點證據包", path: "/report", note: "匯出 JSON / PDF" },
            { step: "8", title: "CBOM（密碼資產清單）匯出", path: "/cbom", note: "CycloneDX 1.6 格式" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-2.5 rounded-lg border bg-background p-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {item.step}
              </div>
              <div>
                <div className="text-sm font-medium">{item.title}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{item.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

function SectionLabel({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: "rose" | "amber" | "blue" | "emerald" | "indigo";
}) {
  const colorMap = {
    rose: "border-rose-200 bg-rose-50 text-rose-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-800",
  };
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold", colorMap[color])}>
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}

function WhyNowCard({
  title,
  body,
  badge,
  badgeVariant,
}: {
  title: string;
  body: string;
  badge: string;
  badgeVariant: "risk" | "warning";
}) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="text-sm font-semibold leading-5">{title}</div>
        <Badge variant={badgeVariant} className="shrink-0">{badge}</Badge>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  );
}

function LeaderCard({
  icon: Icon,
  title,
  metric,
  metricLabel,
  body,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  metric: number;
  metricLabel: string;
  body: string;
  tone: "danger" | "warn" | "default";
}) {
  const metricColor = tone === "danger" ? "text-rose-600" : tone === "warn" ? "text-amber-600" : "text-primary";
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <Icon className={cn("h-4 w-4", metricColor)} />
        {title}
      </div>
      <div className={cn("text-3xl font-semibold tabular-nums", metricColor)}>{metric}</div>
      <div className="mb-3 text-xs text-muted-foreground">{metricLabel}</div>
      <p className="text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  );
}
