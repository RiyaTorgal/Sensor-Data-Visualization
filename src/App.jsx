import "@mantine/core/styles.css";
import { Group, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
function App() {
    // remove rechart errors
    // useEffect(() => {
    //     const originalConsoleError = console.error;
    //     console.error = (...args) => {
    //         if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
    //             return;
    //         }
    //         originalConsoleError(...args);
    //     };
    //     return () => {
    //         console.error = originalConsoleError;
    //     };
    // }, []);

    const [opened, { toggle }] = useDisclosure();
    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: "md",
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="md"
                            size="sm"
                        />
                        <div>Logo</div>
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    <Navbar />
                </AppShell.Navbar>
                <AppShell.Main className="main">
                    <Dashboard />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;