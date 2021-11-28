import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

import {
  HighlightCard,
  TransactionCard,
  TransactionCardProps,
} from "../../components";

import * as S from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  income: HighlightProps;
  expense: HighlightProps;
  total: HighlightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>();
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );

  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      "pt-BR",
      { month: "long" }
    )}`;
  }

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions: DataListProps[] = response ? JSON.parse(response) : [];

    let incomeTotal = 0;
    let expenseTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (transaction) => {
        if (transaction.type === "positive") {
          incomeTotal += Number(transaction.amount);
        } else {
          expenseTotal += Number(transaction.amount);
        }

        const amount = Number(transaction.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(transaction.date));

        return {
          id: transaction.id,
          name: transaction.name,
          amount,
          type: transaction.type,
          category: transaction.category,
          date,
        };
      }
    );

    setTransactions(transactionsFormatted);

    const lastIncomeTransaction = getLastTransactionDate(
      transactions,
      "positive"
    );
    const lastExpenseTransaction = getLastTransactionDate(
      transactions,
      "positive"
    );
    const totalInterval = `01 a ${lastExpenseTransaction}`;

    const total = incomeTotal - expenseTotal;

    setHighlightData({
      income: {
        amount: incomeTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última entrada dia ${lastIncomeTransaction}`,
      },
      expense: {
        amount: expenseTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última saída dia ${lastExpenseTransaction}`,
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <>
          <S.Header>
            <S.UserWrapper>
              <S.UserInfo>
                <S.Photo
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/74667683?v=4",
                  }}
                />
                <S.User>
                  <S.UserGreeting>Olá,</S.UserGreeting>
                  <S.UserName>João Gabriel</S.UserName>
                </S.User>
              </S.UserInfo>

              <S.LogoutButton onPress={() => {}}>
                <S.Icon name="power" />
              </S.LogoutButton>
            </S.UserWrapper>
          </S.Header>

          <S.HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.income.amount}
              lastTransaction={highlightData.income.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expense.amount}
              lastTransaction={highlightData.income.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </S.HighlightCards>

          <S.Transactions>
            <S.Title>Listagem</S.Title>

            <S.TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </S.Transactions>
        </>
      )}
    </S.Container>
  );
}
