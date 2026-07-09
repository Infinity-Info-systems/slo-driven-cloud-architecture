import { sloRegistry } from './sloRegistry';

export interface SloReportRow {
  service: string;
  owner: string;
  sli: string;
  target: string;
  budget: string;
}

export function buildSloReport() {
  const rows: SloReportRow[] = sloRegistry.objectives.map((objective) => ({
    service: objective.service,
    owner: objective.owner,
    sli: objective.sli,
    target: objective.target,
    budget: objective.budget,
  }));

  return {
    title: sloRegistry.repository,
    purpose: sloRegistry.purpose,
    layers: sloRegistry.layers,
    governanceQuestions: sloRegistry.governanceQuestions,
    operatingPrinciples: sloRegistry.operatingPrinciples,
    decisionRule: sloRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildSloSummary() {
  return {
    totalObjectives: sloRegistry.objectives.length,
    healthyBudgets: sloRegistry.objectives.filter((objective) => objective.budget === 'Healthy').length,
    reviewBudgets: sloRegistry.objectives.filter((objective) => objective.budget === 'Review').length,
    pausedBudgets: sloRegistry.objectives.filter((objective) => objective.budget === 'Paused').length,
  };
}
